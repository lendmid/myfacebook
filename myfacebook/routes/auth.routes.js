const {Router} = require('express');
const router = Router();
const bcrypt = require('bcrypt');
const config = require('config');
const jwt = require('jsonwebtoken');
const {check, validationResult} = require('express-validator');
const User = require('../models/User');
const auth = require('../middleware/auth.middleware');


// /api/auth/login
router.post('/login',
    [
        check('email', 'Email or password is incorrect').isEmail(),
        check('password', 'Email or password is incorrect').exists()
    ],
    async (req, res) => {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({
                    errors: errors.array(),
                    message: "incorrect data during login"
                })
            }
            const {email, password} = req.body;

            const user = await User.findOne({email});
            if (!user) return res.status(400).json({message: "Email or password is incorrect"});

            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) await res.status(400).json({message: 'Email or password is incorrect'});

            const token = jwt.sign(
                {userId: user.id},
                config.get('jwtSecret'),
                {expiresIn: '1h'} // lifetime token
            );
            await res.json({token, userId: user.id})

        } catch (e) {
            await res.status(500).json({message: 'Something went wrong, please try again'});
        }
    });

// /api/auth/register
router.post('/register',
    [
        check('email', 'Incorrect email').isEmail(),
        check('password', 'Minimum length password is 6 symbol').isLength({min: 6}),
        check('firstName', 'Input your first name').exists(),
        check('lastName', 'Input your last name').exists()
    ],
    async (req, res) => {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({
                    errors: errors.array(),
                    message: "Incorrect data during registration"
                })
            }

            const {email, password, firstName, lastName} = req.body;
            const candidate = await User.findOne({email});

            if (candidate) return res.status(400).json({message: 'This user already exists'});

            const hashedPassword = await bcrypt.hash(password, 12);
            const user = new User({email, password: hashedPassword, firstName, lastName});

            await user.save();
            await res.status(201).json({userId: user._id})

        } catch (e) {
            await res.status(500).json({message: 'Something went wrong, please try again'});
        }
    });

// /api/auth/userData
router.get('/userData', auth, async (req, res) => {
    try {
        const user = await User.findById(req.user.userId);
        if (!user) return res.status(403).json({message: "Authorization required"});
        await res.json({userId: req.user.userId, email: user.email})
    } catch (e) {
        await res.status(500).json({message: 'Something went wrong, please try again'});
    }
});

module.exports = router;
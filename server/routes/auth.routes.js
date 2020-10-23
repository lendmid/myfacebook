const {Router} = require('express');
const router = Router();
const bcrypt = require('bcrypt');
const config = require('config');
const jwt = require('jsonwebtoken');
const {check, validationResult} = require('express-validator');
const User = require('../models/User');

// /api/auth/register
router.post('/register',
    //middleware for validation
    [
        check('email', 'Incorrect email').isEmail(),
        check('password', 'Minimum length password is 6 symbol').
            isLength({min: 6})
    ],
    async (req, res) => {
        try {
            console.log(req.body);
            // if validation failed => return
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({
                    errors: errors.array(),
                    message: "Incorrect data during registration"
                })
            }
        
            const {email, password, firstName, lastName} = req.body;
            const candidate = await User.findOne({email});
            if (candidate) return res.status(400).json({message: 'This user already exists'})
        
            const hashedPassword = await bcrypt.hash(password, 12);
            const user = new User({email, password: hashedPassword, firstName, lastName});
        
            await user.save();
            res.status(201).json({message: 'User created'})
        
        } catch (e) {
            res.status(500).json({message: 'Something went wrong, please try again'});
        }
    })

// /api/auth/register
router.post('/login',
    //middleware for validation
    [
        check('email', 'Email or password is incorrect').isEmail(),
        check('password', 'Email or password is incorrect').exists()
    ],
    async (req, res) => {
        try {
            // if validation failed => return
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({
                    errors: errors.array(),
                    message: "incorrect data during login"
                })
            }
            
            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) res.status(400).json({message: 'Email or password is incorrect'});
            
            const token = jwt.sign(
                {userId: user.id},
                config.get('jwtSecret'),
                {expiresIn: '1h'} // lifetime token
            )
            res.json({token, userId: user.id})
            
        } catch (e) {
            res.status(500).json({message: 'Something went wrong, please try again'});
        }
    })

module.exports = router;
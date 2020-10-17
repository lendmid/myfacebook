const {Router} = require('express');
const router = Router();
const bcrypt = require('bcrypt')
const {check, validationResult} = require('express-validator')
const User = require('../models/User')

// /api/auth/register
router.post('/register',
    [
        check('email', 'Incorrect email').isEmail(),
        check('password', 'Minimum length password is 6 symbol').
            isLength({min: 6})
    ],
    async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({})
        }
        
        const {email, password} = req.body;
        const candidate = await User.findOne({email});
        if (candidate) {
            return res.status(400).json({message: 'This user already exists'})
        }
    
        const hashedPassword = await bcrypt.hash(password, 12);
        const user = new User({email, password: hashedPassword});
    
        await user.save();
    
        res.status(201).json({message: 'User created'})
        
    } catch (e) {
        res.status(500).json({message: 'Something went wrong, please try again'});
    }
})

router.post('/login', async (req, res) => {
    try {
    
    } catch (e) {
        res.status(500).json({message: 'Something went wrong, please try again'});
        
    }
})

module.exports = router;
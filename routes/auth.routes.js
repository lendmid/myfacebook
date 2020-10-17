const {Router} = require('express');
const router = Router();
const User = require('./models/User')

router.post('/register', async (req, res) => {
    try {
        const {email, password} = req.body;
        const candidate = await User.findOne({email})
        if (candidate) res.status(400).json({message: "This user already exists"})
        
    } catch (e) {
        res.status(500).json({message: "Something went wrong, please try again"});
    }
})

router.post('/login', async (req, res) => {
    try {
    
    } catch (e) {
        res.status(500).json({message: "Something went wrong, please try again"});
        
    }
})

module.exports = router;
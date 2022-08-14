const {Router} = require('express');
const router = Router();
const User = require('../models/User');
const auth = require('../middleware/auth.middleware');


// /api/users
router.get('/users', auth, async (req, res) => {
    try {
        console.log('request get')
        const users = await User.find({});
        console.log(users)
        // await res.json({
        //     userId: user._id,
        //     firstName: user.firstName,
        //     lastName: user.lastName,
        //     status: user.status,
        //     photo: user.photo,
        //     posts
        // })
    } catch (e) {
        await res.status(500).json({message: 'Something went wrong, please try again'});
    }
});

module.exports = router;
const {Router} = require('express');
const router = Router();
const Post = require('../models/Post');
const User = require('../models/User');
const auth = require('../middleware/auth.middleware');


// /api/profile
router.get('/', auth, async (req, res) => {
    try {
        const user = await User.findById(req.user.userId);
        if (!user) return res.status(403).json({message: "Authorization required"});

        const postsFromBase = await Post.find({owner: req.user.userId})
        const posts = postsFromBase.map(p => {
            let id = p._id;
            let message = p.message;
            let date = p.date;
            return {id, message, date}
        }).reverse();
        await res.json({
            userId: user._id,
            firstName: user.firstName,
            lastName: user.lastName,
            photo: user.photo,
            posts
        })
    } catch (e) {
        await res.status(500).json({message: 'Something went wrong, please try again'});
    }
});

// /api/profile/addPost
router.post('/addPost', auth, async (req, res) => {
    try {
        const user = await User.findById(req.user.userId);
        if (!user) return res.status(403).json({message: "Authorization required"});

        const post = new Post({message: req.body.postText, owner: user.id});
        await post.save();

        await res.status(201).json({post});
    } catch (e) {
        await res.status(500).json({message: 'Something went wrong, please try again'});
    }
});

module.exports = router;
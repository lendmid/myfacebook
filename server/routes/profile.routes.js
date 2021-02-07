const {Router} = require('express');
const router = Router();
const Post = require('../models/Post');
const User = require('../models/User');
const auth = require('../middleware/auth.middleware');


// /api/profile
router.get('/', auth, async (req, res) => {
    try {
        const user = await User.findById(req.user.userId);
        const postsFromBase = await Post.find({owner: req.user.userId});

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
            status: user.status,
            photo: user.photo,
            posts
        })
    } catch (e) {
        await res.status(500).json({message: 'Something went wrong, please try again'});
    }
});

// /api/profile/post
router.post('/post', auth, async (req, res) => {
    try {
        const user = await User.findById(req.user.userId);

        const post = new Post({message: req.body.postText, owner: user.id, date: req.body.date});
        await post.save();

        await res.status(201).json({id: post._id, message: post.message, date: post.date});
    } catch (e) {
        await res.status(500).json({message: 'Something went wrong, please try again'});
    }
});

router.delete('/post', auth, async (req, res) => {
    try {
        await Post.deleteOne({_id: req.body.postId, owner: req.user.userId})
        await res.sendStatus(200);
    } catch (e) {
        await res.status(500).json({message: 'Something went wrong, please try again'});
    }
});

// /api/profile/status
router.put('/status', auth, async (req, res) => {
    try {
        const user = await User.findById(req.user.userId);
        user.status = req.body.status;

        await user.save();
        await res.sendStatus(200);
    } catch (e) {
        await res.status(500).json({message: 'Something went wrong, please try again'});
    }
});

module.exports = router;
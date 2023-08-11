const router = require('express').Router();
const { Post } = require('../../models');

router.post('/posts', async (req,res) => {
    const {title, content} = req.body;

    try{
        await Post.create({
            title,
            content,
            userId: req.session.userId,
        });
        res.redirect('/dashboard'); //redirect user back to dashboard
    } catch (error){
        console.log(error);
        res.status(500).send('Error submitting post');
    }
});

module.exports = router;
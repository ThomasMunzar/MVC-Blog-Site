const router = require('express').Router();
const { Comment, User } = require('../../models');


router.get('/', async (req, res) => {
 
    try {
        const comments = await Comment.findAll({
            include: [
                {
                    model: User,
                    attributes: ['id'],
                },
            ],
        });
        res.status(200).json(comments);
        console.log(comments)
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }

});



router.post('/', async (req, res) => {
    // create a new comment
    try {
        const { content, project_id } = req.body;
        const user_id = req.session.user_id;
        const newComment = await Comment.create({
            content: content,
            user_id: user_id,
            project_id: project_id,
        });
        res.status(200).json(newComment);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.put('/:id', async (req, res) => {
    // update a comment by its `id` value
    try {
        const comment = await Comment.update(req.body, { where: { id: req.params.id } })
        res.status(200).json(comment);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.delete('/:id', async (req, res) => {
    // delete a comment by its `id` value
    try {
        const comment = await Comment.destroy({ where: { id: req.params.id } })
        res.status(200).json(comment);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
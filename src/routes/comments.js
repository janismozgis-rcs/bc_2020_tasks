import express from 'express';

const router = express.Router();

// GET /comments/:taskId
router.get('/:taskId', (req, res) => {
    res.send('Getting comments for task ' + req.params.taskId);
});

// POST /comments
// {
//     "comment": "FOo bar baz",
//     "taskId": "123"
// }
router.post('/', (req, res) => {
    res.send('Creating comment')
});

// DELETE /comments/:commentId
router.delete('/:commentId', (req, res) => {
    res.send('Deleting comment ' + req.params.commentId);
});

export default router;
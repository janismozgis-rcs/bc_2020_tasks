import express from 'express';
import Task from '../models/Task.js';

const router = express.Router();

// GET /comments/:taskId
router.get('/:taskId', async (req, res) => {
    try {
        const query = Task.findById(req.params.taskId);
        const task = await query.exec();

        res.json(task.comments);
    } catch(err) {
        res.json({message: 'Something went wrong'});
    }
});

// POST /comments
// {
//     "comment": "FOo bar baz",
//     "taskId": "123"
// }
router.post('/', async (req, res) => {
    try {
        const query = Task.findById(req.body.taskId);
        const task = await query.exec();

        const comment = {
            id: Math.random().toString(36).substr(2, 36),
            comment: req.body.taskId,
            createdAt: new Date(),
        }

        task.comments.push(comment);
        const newTask = await task.save();

        res.json(newTask);
    } catch(err) {
        res.json({message: 'Something went wrong'});
    }
});

// DELETE /comments/:commentId/:taskId
router.delete('/:commentId/:taskId', async (req, res) => {
    try {
        const query = Task.findById(req.params.taskId);
        const task = await query.exec();

        let updatedComments = [];
        for (let comment of task.comments) {
            if (comment.id != req.params.commentId) {
                updatedComments.push(comment);
            }
        }

        task.comments = updatedComments;

        const updatedTask = await task.save();
        res.json(updatedTask);
    } catch(err) {
        res.json({message: 'Something went wrong'});
    } 
});

export default router;
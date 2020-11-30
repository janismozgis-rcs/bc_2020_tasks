import express from 'express';
import Task from '../models/Task.js';

const router = express.Router();

// GET /tasks
router.get('/', async (req, res) => {
    try {
        const query = Task.find({});
        const tasks = await query.exec();
        res.json(tasks);    
    } catch(err) {
        res.json({message: 'Something went wrong'});
    }
});

// POST /tasks
// {
//     "title": "foo",
//     "labels": []
// }
router.post('/', async (req, res) => {
    const task = new Task({
        title: req.body.title,
        description: req.body.description,
        labels: req.body.labels,
    });

    try {
        const data = await task.save();
        res.json(data);    
    } catch(err) {
        res.json({message: err});
    }
});

// GET /tasks/123123
router.get('/:taskid', async (req, res) => {
    try {
        const query = Task.findById(req.params.taskid);
        const task = await query.exec();
        res.json(task);
    } catch(err) {
        res.json({message: 'Something went wrong'});
    }
});

// PATCH /tasks/123123123
// {
//     "title": "foo",
//     "labels": [],
//     "description": 'some text',
// }
router.patch('/:taskid', async (req, res) => {
    try {
        const query = Task.findById(req.params.taskid);
        const task = await query.exec();

        task.title = req.body.title;
        task.description = req.body.description;
        task.labels = req.body.labels;

        await task.save();

        res.json(task);
    } catch(err) {
        res.json({message: 'Something went wrong'});
    }
});

// DELETE /tasks/123123123
router.delete('/:taskid', async (req, res) => {
    try {
        const query = Task.deleteOne({
            _id: req.params.taskid
        });
        await query.exec();

        res.json({message: 'task deleted'});
    } catch(err) {
        res.json({message: 'Something went wrong'});
    }
});

// PATCH /tasks/complete/123123
// {
//     "isCompleted": true
// }
router.patch('/complete/:taskid', async (req, res) => {
    try {
        const query = Task.findById(req.params.taskid);
        const task = await query.exec();

        task.isCompleted = req.body.isCompleted;

        await task.save();

        res.json(task);
    } catch(err) {
        res.json({message: 'Something went wrong'});
    }});

export default router;
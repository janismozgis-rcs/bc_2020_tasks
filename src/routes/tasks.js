import express from 'express';
import Task from '../models/Task.js';

const router = express.Router();

// GET /tasks
router.get('/', (req, res) => {
    res.send('Reteive all tasks');
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

    const savedTask = await task.save();
    res.json(savedTask)

    // task.save()
    //     .then((data) => {
    //         res.json(data);
    //     })
    //     .catch((err) => {
    //         res.json({message: err});
    //     });
});

// GET /tasks/123123
router.get('/:taskid', (req, res) => {
    res.send('get info about task with id: ' + req.params.taskid);
});

// PATCH /tasks/123123123
// {
//     "title": "foo",
//     "labels": [],
//     "description": 'some text',
// }
router.patch('/:taskid', (req, res) => {
    res.send('edit task with id: ' + req.params.taskid);
});

// DELETE /tasks/123123123
router.delete('/:taskid', (req, res) => {
    res.send('delete task with id: ' + req.params.taskid);
});

// PATCH /tasks/complete/123123
// {
//     "isCompleted": true
// }
router.patch('/complete/:taskid', (req, res) => {
    res.send('complete task with id: ' + req.params.taskid);
});

export default router;
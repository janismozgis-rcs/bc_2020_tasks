import express from 'express';
import Label from '../models/Label.js';

const router = express.Router();

// GET /labels
router.get('/', async (req, res) => {
    try {
        const query = Label.find({});
        const tasks = await query.exec();
        res.json(tasks);    
    } catch(err) {
        res.json({message: 'Something went wrong'});
    }});

// POST /labels
// {
//     "title": "foo",
//     "color": "#ff0000"
// }
router.post('/', async (req, res) => {
    const label = new Label({
        title: req.body.title,
        color: req.body.color,
    });

    try {
        const data = await label.save();
        res.json(data);    
    } catch(err) {
        res.json({message: err});
    }
});

// PATCH /labels/:labelId
// {
//     "title": "foo",
//     "color": "#ff0000"
// }
router.patch('/:labelId', async (req, res) => {
    try {
        const query = Label.findById(req.params.labelId);
        const label = await query.exec();

        label.title = req.body.title;
        label.color = req.body.color;

        await label.save();

        res.json(label);
    } catch(err) {
        res.json({message: 'Something went wrong'});
    }
});

// DELETE /labels/:labelId
router.delete('/:labelId', async (req, res) => {
    try {
        const query = Label.deleteOne({
            _id: req.params.labelId
        });
        await query.exec();

        res.json({message: 'Label deleted'});
    } catch(err) {
        res.json({message: 'Something went wrong'});
    }
});

export default router;
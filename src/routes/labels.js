import express from 'express';

const router = express.Router();

// GET /labels
router.get('/', (req, res) => {
    res.send('getting all labels');
});

// POST /labels
// {
//     "title": "foo",
//     "color": "#ff0000"
// }
router.post('/', (req, res) => {
    res.send('creating label')
});

// PATCH /labels/:labelId
// {
//     "title": "foo",
//     "color": "#ff0000"
// }
router.patch('/:labelId', (req, res) => {
    res.send('updating label' + req.params.labelId);
});

// DELETE /labels/:labelId
router.delete('/:labelId', (req, res) => {
    res.send('Deleting label');
});

export default router;
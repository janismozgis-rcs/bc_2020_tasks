import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send('Yay from express');
});

app.get('/tasks', (req, res) => {
    res.send('This is tasks page!');
});


app.listen(3001);
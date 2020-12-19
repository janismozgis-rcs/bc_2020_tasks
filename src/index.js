import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import taskRoutes from './routes/tasks.js';
import labelRoutes from './routes/labels.js';
import commentRouters from './routes/comments.js';
import mongoose from 'mongoose';
import cors from 'cors';

dotenv.config();

const app = express();

app.use(bodyParser.json());
app.use(cors());
// register exteranl routes
app.use('/tasks', taskRoutes);
app.use('/labels', labelRoutes);
app.use('/comments', commentRouters);


app.get('/', (req, res) => {
    res.send('Yay from express');
});

app.get('/tasks', (req, res) => {
    res.send('This is tasks page!');
});

mongoose.connect(
    process.env.MONGOOSE_CONNECTION_URL, 
    {useNewUrlParser: true, useUnifiedTopology: true}, 
    (err) => {
        if (err) {
            console.log('there was an error', err);
        } else {
            console.log('Connection successfull');
        }
    }
);

app.listen(process.env.PORT, () => {
    console.log(`App is ready and listening on port ${process.env.PORT}`);
});
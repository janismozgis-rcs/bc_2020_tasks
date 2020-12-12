import mongoose from 'mongoose';

const LabelSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    color: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const label = mongoose.model('Labels', LabelSchema);

export default label;
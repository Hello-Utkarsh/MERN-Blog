import mongoose from 'mongoose';
const { Schema } = mongoose;

const UserSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    discription: {
        type: String,
        required: true
    },
    password: {
        type: Number,
        required: true
    },
});

module.exports = mongoose.model('User', UserSchema);
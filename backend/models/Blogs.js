const mongoose = require('mongoose')
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
    tag: {
        type: String,
        required: true
    },
});

module.exports = mongoose.model('Blogs', UserSchema);
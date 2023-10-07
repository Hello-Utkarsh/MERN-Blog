const mongoose = require('mongoose')
const { Schema } = mongoose;
let time = new Date();
// const timeStamp = new Date(Date.UTC(current.getFullYear(),
//     current.getMonth(), current.getDate(), current.getHours(),
//     current.getMinutes(), current.getSeconds(), current.getMilliseconds()));

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
    Date: {
        type: Date,
        default: Date().toString()
    }
});

module.exports = mongoose.model('Blogs', UserSchema);
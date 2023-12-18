const mongoose = require('mongoose')
const { Schema } = mongoose;

const UserSchema = new Schema({
    post_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    user: {
        type: String,
        required: true
    },
    discription: {
        type: String,
        required: true
    },
    Date: {
        type: Date,
        default: Date().toString()
    }
});

module.exports = mongoose.model('Comments', UserSchema);
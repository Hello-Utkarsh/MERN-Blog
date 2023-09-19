const mongoose = require('mongoose');
const dotenv = require('dotenv')
dotenv.config()

const ConnectToMongo = async () => {
    mongoose.connect(process.env.VITE_MONGO_URI)
    .then(console.log("Connected"))
    .catch(err => console.log(err))
}

module.exports = ConnectToMongo
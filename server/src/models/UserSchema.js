const mongoose = require("mongoose")

const userSchemna = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }

})

const User = mongoose.model("UserRegister", userSchemna)

module.exports = User;
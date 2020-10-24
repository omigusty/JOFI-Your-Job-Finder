const mongoose = require("mongoose")

const socialSchema = new mongoose .Schema({
    github :{
        type: String,
        required: true
    },
    instagram: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    web: {
        type: String,
        required: true,
    },
})

module.exports = mongoose.model('SocialMedia', socialSchema)
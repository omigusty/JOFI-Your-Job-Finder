const mongoose = require("mongoose")
const {ObjectId} = mongoose.Schema

const talentsSchema = new mongoose .Schema({
    profilePhoto :{
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true,
    },
    socialMedia: {
        type: ObjectId,
        ref: 'SocialMedia',
    },
    description :{
        type: String,
        required: true
    },
    portofolio: {
        type: ObjectId,
        ref: 'Portofolio',
    }
})

module.exports = mongoose.model('Talents', talentsSchema)
const mongoose = require("mongoose")

const jobSchema = new mongoose .Schema({
    tittle :{
        type: String,
        required: true
    },
    companyName: {
        type: String,
        required: true,
    },
    logoBrand: {
        type: String,
        required: true,
    },
    addressCity :{
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true,
    }
})

module.exports = mongoose.model('jobNeeded', jobSchema)
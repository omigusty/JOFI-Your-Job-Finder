const mongoose = require("mongoose")

const portofolioSchema = new mongoose .Schema({
    thumbnailImage :{
        type: String,
        required: true
    },
    linkPortofolio: {
        type: String,
        required: true,
    }
})

module.exports = mongoose.model('Portofolio', portofolioSchema)
const mongoose = require('mongoose')

const photoSchema = new mongoose.Schema({

        albumId: {
            type: String
        },
        id:{
            type: String
        },
        title: {
            type: String
        },
        url: {
            type: String
        },
        thumbnailUrl:{
            type: String
        }

})

const Photo = mongoose.model('Photo', photoSchema)
module.exports = Photo
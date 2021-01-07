const db = require('../models')
const axios = require('axios')

exports.getPhoto = async (req,res, next)=>{

    try{
        const limit = req.query.limit
        const skip = req.query.skip

        const photo = await db.Photo.find()
                                    .skip(skip)
                                    .limit(limit)

        res.send(photo)
    }catch(err){
        return next({
            status: 400,
            message: err.message
        })
    }
}

exports.addPhoto = async (req,res, next)=>{

    try{
        let apiUrl = 'https://jsonplaceholder.typicode.com/photos'
        let allPhoto = await axios.get(apiUrl)

        let photo
      
        allPhoto.data.forEach(async (element) => {
             photo = await db.Photo.create(element)
        });
       

        res.send(photo)
    }catch(err){
        return next({
            status: 400,
            message: err.message
        })
    }
}
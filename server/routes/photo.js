const express = require('express')
const { addPhoto, getPhoto } = require('../handlers/photo')
const router = express.Router()

router.get('/photo', getPhoto)
router.post('/photo', addPhoto)

module.exports = router
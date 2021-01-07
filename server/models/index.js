
const mongoose = require('mongoose');

mongoose.set('debug',true);
mongoose.Promise = Promise;
 mongoose.connect('mongodb+srv://prabhat:prabhat@prabhat.usk7p.mongodb.net/photo',{    
useUnifiedTopology: true,
}).then(res=>console.log("success")).catch(err=>console.log(err));

module.exports.Photo = require('./photo');

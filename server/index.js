require('dotenv').config();

const express     =    require('express'),
      bodyParser  =    require('body-parser'),
      morgan      =    require('morgan'),
      cors        =    require('cors'), 
      mongoose    = require('mongoose')  
      app         =    express();

app.use(express.urlencoded({ extended: false })); 
const errorHandler = require('./handlers/err')

  app.use(bodyParser.json());
  app.use(cors());
  app.use(morgan('tiny'));

  
 
  


  // error handling
  
    app.use(function(req,res,next){
       err = new Error("not found");
      err.status = 404;
        next(err);
  })

  
 
  app.use(errorHandler);

  app.listen(process.env.PORT || 5000);
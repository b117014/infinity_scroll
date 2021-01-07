
const express     =    require('express'),
      bodyParser  =    require('body-parser'),
      morgan      =    require('morgan'),
      cors        =    require('cors'), 
      mongoose    =    require('mongoose')  
      app         =    express();

app.use(express.urlencoded({ extended: false })); 
const photoRouter = require('./routes/photo')

const errorHandler = require('./handlers/err')

  app.use(bodyParser.json());
  app.use(cors());
  app.use(morgan('tiny'));

  app.use('/api', photoRouter)



  // error handling
  
    app.use(function(req,res,next){
       err = new Error("not found");
      err.status = 404;
        next(err);
  })

  
 
  app.use(errorHandler);

  app.listen(4000);
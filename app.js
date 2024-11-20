require('dotenv').config();
require('express-async-errors');

const express = require('express');
const app = express();
const mainRouter=require("./routes/main");

const notFoundMiddleware = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');

// middleware
app.use(express.static('./public'));  //would be used to serve the static files
/*
Express.json() middleware
  ->Reads the incoming request payload with Content-type:application/json
  ->Then it parses the json data and then converts it to a js object
  ->Attaches the js object to the req.body. And hence we are able to access the req.body
*/ 
app.use(express.json());

app.use("/api/v1",mainRouter);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);


const port = process.env.PORT || 3000;
console.log(port);


const start = async () => {
  try {
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();


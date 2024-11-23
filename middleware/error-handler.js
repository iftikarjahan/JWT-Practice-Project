const {CustomAPIError} = require('../errors')
const {StatusCodes}=require("http-status-codes")

const errorHandlerMiddleware = (err, req, res, next) => {
  /*
  ->Whenever we get an error, we need to create a new object
  from the CustomAPIError class
  */ 
  if (err instanceof CustomAPIError) {
    return res.status(err.statusCode).json({ msg: err.message })
  }
  return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send('Something went wrong try again later...Its not the part of custom API error🥶');
}

module.exports = errorHandlerMiddleware

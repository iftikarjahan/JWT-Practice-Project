/*
->This is the custom class that we have created that would be used to throw errors
*/

class CustomAPIError extends Error {
  /*
  ->This class has been created just for putting the status code otherwise we could have 
  worked with the error class only
  */ 
  constructor(message, statusCode) {
    super(message)
    this.statusCode = statusCode  
  }
}

module.exports = CustomAPIError

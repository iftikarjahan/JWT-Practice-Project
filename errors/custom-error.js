/*
->This is the custom class that we have created that would be used to throw errors
*/

class CustomAPIError extends Error {
  constructor(message, statusCode) {
    super(message)
    this.statusCode = statusCode
  }
}

module.exports = CustomAPIError

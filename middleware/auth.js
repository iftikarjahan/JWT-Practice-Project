const { use } = require("express/lib/router");
const { UnauthenticatedError } = require("../errors");
require("dotenv").config();
const jwt = require("jsonwebtoken");

//This would be used for creating a more generalised workflow
const authMiddleware = (req, res, next) => {
  //  Here I need to verify the token that we receive
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    throw new UnauthenticatedError("No token provided🚩");
  }
  const token = authHeader.split(" ")[1];

  // Once I have extracted the token, I need to verify the token using the jwt.verify() method
  try {
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    const luckyNumber = Math.floor(Math.random() * 100);
    /*
    ->Now we are going to attach a custom property to the req object 
    ->This is a general method to transfer data from one middleware function to the other
    */
    const { id, userName } = decodedToken;

    req.user = { luckyNumber, id, userName }; //now this data could be accessed in other middlewares using the req.user object
    next();
  } catch (error) {
    // If we are not able to verify the token then send an error
    throw new UnauthenticatedError(
      "Token Not verified.....Not authorised to access this route😠"
    );
  }
};

module.exports = authMiddleware;

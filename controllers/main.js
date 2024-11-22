const { use } = require("express/lib/router");
const CustomAPIError = require("../errors/custom-error");
require("dotenv").config();
const jwt = require("jsonwebtoken");

const loginController = async (req, res, next) => {
  const { userName, password } = req.body;
  //   console.log(userName, password);
  if (!userName || !password) {
    /*
        ->Note that the throw keyword stops the execution of the code and throws an
        error object to the error handling middleware.
        */
    throw new CustomAPIError("Plese provide both username and password🍃", 400);
  }
  /*
    ->Using the JWT.sign method, we can create a JWT token
    ->The JWT.sign() method takes 3 arguments-payload,the secret key and the algo that
    would be used to sign the algo
    ->The result would be a hash that would be sent to the client
    */
  const id = new Date().getDate();
  const token = jwt.sign({ id, userName }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });

  res.status(200).json({ msg: "User Created", jwtToken: token });
};

const dashBoardController = (req, res, next) => {
  
  //  Here I need to verify the token that we receive
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    throw new CustomAPIError("No token provided🚩", 401);
  }
  const token = authHeader.split(" ")[1];
  // Once I have extracted the token, I need to verify the token using the jwt.verify() method
  try {
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    const luckyNumber = Math.floor(Math.random() * 100);
    res.status(200).json({
      message: `Helloooo ${decodedToken.userName}🐰`,
      secretData: `Here is your secret data with the code ${luckyNumber}`,
    });
  } catch (error) {
    // If we are not able to verify the token then send an error
    throw new CustomAPIError("Token Not verified.....Not authorised to access this route😠",401);
  }
};

module.exports = {
  /*
    ->When the key-value pair name is same, then we can use simply the names 
    */
  loginController,
  dashBoardController,
};

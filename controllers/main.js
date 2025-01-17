const { use } = require("express/lib/router");
const {BadRequest} = require("../errors");
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
    throw new BadRequest("Plese provide both username and password🍃");
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
  res.status(200).json({
    message: `Helloooo ${req.user.userName}🐰`,
    secretData: `Here is your secret data with the code ${req.user.luckyNumber}`,
  });
};

module.exports = {
  /*
    ->When the key-value pair name is same, then we can use simply the names 
    */
  loginController,
  dashBoardController,
};

const express=require("express");
const router=express.Router();
const controllersObject=require("../controllers/main");

/*
->When this requset is done, the token that is generated is stored in the local storage
*/ 
router.route("/login").post(controllersObject.loginController);

/*
->Note an important thing that when this requst would be done, we would need to pass the 
authorization header from the local storage(check the browser-app.js file), so that it could 
be sent back to the backend for verification in the subsequent requests.
*/ 
router.route("/dashboard").get(controllersObject.dashBoardController);

module.exports=router;
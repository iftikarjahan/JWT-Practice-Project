const express=require("express");
const router=express.Router();
const controllersObject=require("../controllers/main");

router.route("/login").post(controllersObject.loginController);
router.route("/dashboard").get(controllersObject.dashBoardController);

module.exports=router;
const CustomAPIError=require("../errors/custom-error");

const loginController=async(req,res,next)=>{
    const {userName,password}=req.body;
    if(!userName || !password){
        /*
        ->Note that the throw keyword stops the execution of the code and throws an
        error object to the error handling middleware.
        */ 
        throw new CustomAPIError("Plese provide both username and password🍃",400)
    }
    res.send(`Fake login with userName😅:${req.body.userName}`);
}

const dashBoardController=(req,res,next)=>{
    const luckyNumber=Math.floor(Math.random()*100);
    res.status(200).json({message:`Helloooo🐰`,secretData:`Here is your secret data with the code ${luckyNumber}`});
}

module.exports={
    /*
    ->When the key-value pair name is same, then we can use simply the names 
    */ 
    loginController,
    dashBoardController
}
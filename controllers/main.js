const loginController=async(req,res,next)=>{
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
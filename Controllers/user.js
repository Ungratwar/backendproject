const userModel = require("./../model/user");

// TO create new user 

exports.createUser = async (req, res) => {
    try{
        const saveData = await new userModel(req.body).save();
        res.status(201).json(saveData);
    }catch(err){
        res.status(400).json({err});
    }
}


// TO get all user

exports.getAllUser = async (req, res) => {
    try{
        const users = await userModel.find();
        res.json(users);
    }catch(err){
        res.status(400).json({err});
    }
}

// To get specific user 

exports.getUser = async (req, res) => {
    try{
        const user = await userModel.find({_id:req.params.userID});
        res.status(200).json(user);
    }catch(err){
        res.status(400).json({err});
    }
}


// TO update user 

exports.updateUser =(req, res) => {
    userModel.findOneAndUpdate({_id:req.params.userID}, req.body, {new:true}, (err, data) => {
        if(err){
            res.json(err);
        }else{
            res.json(data);
        }
    });
}


exports.deleteUser =(req, res) => {
    userModel.findOneAndUpdate({_id:req.params.userID}, req.body, {new:true}, (err, data) => {
        if(err){
            res.json(err);
        }else{
            res.send("User deleted..!!");
        }
    });
}
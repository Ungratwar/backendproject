const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");


// Create Schema 

const userSchema = new mongoose.Schema({
    emailID: String,
    userName: String,
    password: String,
    delete: false
},{
    timestamps:true
})
userSchema.pre("save", async function (next){
    if(this. isModified("password")){
        this.password = await bcrypt.hash(this.password, 10);
    } 
    next();
});
module.exports = mongoose.model("user", userSchema);
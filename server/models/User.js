const mongoose=require('mongoose');

const usersSchema=new mongoose.Schema({
  name:String,
  email:String,
  phone:String,
  message:String,
});

// exports mongoose model as module using above schema
module.exports=mongoose.model("collections",usersSchema)
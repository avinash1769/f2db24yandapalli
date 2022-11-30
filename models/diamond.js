const mongoose = require("mongoose") 
const diamondSchema = mongoose.Schema({ 
 diamond_type: {
    type :String,
    required : true},

 diamond_name: {
    type :String,
    required: true},
     
 diamond_size:{
    type:Number,
    required:true,
    min:1,
    max:40000}
 
}) 
 
module.exports = mongoose.model("diamond", 
diamondSchema) 
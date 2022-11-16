const mongoose = require("mongoose") 
const diamondSchema = mongoose.Schema({ 
 diamond_type: String,
 diamond_name: String, 
 diamond_size: Number
 
}) 
 
module.exports = mongoose.model("diamond", 
diamondSchema) 
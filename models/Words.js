const mongoose = require("mongoose");
//const { MongoDBNamespace } = require("mongoose"/node_modules/mongodb);
const Schema = mongoose.Schema;
const schema = new Schema(
    {
        keyword:{
            type:String,
            required:true
        },
        replacewith:{
            type:String,
            required:true
        }
    }
)
const Words = mongoose.model("words",schema);
module.exports = Words;
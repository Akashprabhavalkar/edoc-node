const mongoose = require("mongoose");
//const { MongoDBNamespace } = require("mongoose"/node_modules/mongodb);
const Schema = mongoose.Schema;
const schema = new Schema(
    {
        title:{
            type:String,
            required:true
        },
        malecontents:{
            type:String,
            required:true
        },
        femalecontents:{
            type:String,
            required:true
        }
    }
)
const Documents = mongoose.model("documents",schema);
module.exports = Documents;
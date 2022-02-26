const mongoose = require("mongoose");
//const { MongoDBNamespace } = require("mongoose"/node_modules/mongodb);
const Schema = mongoose.Schema;
const schema = new Schema({
    empid: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    birthdate: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    mobileno: {
        type: String,
        required: true
    },
    joiningdate: {
        type: String,
        required: true
    },
    departmentname: {
        type: String,
        required: true
    },
    relievingdate: {
        type: String,
        required: true
    },
    imagepath: {
        type: String,
        required: true
    }
})
const Employees = mongoose.model("employees", schema);
module.exports = Employees;
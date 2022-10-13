require('dotenv').config();
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

//mongoose.connect(process.env.DB_KEY);

const userSchema = new Schema({
    "email": { type: String, required: true },
    // "firstName" : { type: String, required: true },
    // "lastName": { type: String, required: true },
    "password": { type: String, required: true },
    // "friendList": Array,
    // "chatHistory": Array
});

module.exports = mongoose.model("user_profiles", userSchema);
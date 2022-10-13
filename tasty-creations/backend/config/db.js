require('dotenv').config();
const mongoose = require("mongoose");

const connectToDB = () => {
    const connectionStr = process.env.DB_KEY;
    try {
        mongoose.connect(connectionStr);
        mongoose.connection.on('open', () => {
            console.log("Successfully connected to DB");
        });
    } catch(e) {
        console.error(`Connection to DB failed: ${error}`);
    }
    
}

module.exports = { connectToDB };
const mongoose = require("mongoose");

const connectionString = process.env.CONNECTION_STRING

mongoose.connect(connectionString).then((res)=>{
    console.log("connected to mongoDB");
}).catch((err)=>{
    console.log("Connection failed");
    console.log(err);
})
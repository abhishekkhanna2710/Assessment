const mongoose = require("mongoose");

// const url = process.env.MONGO_URL;
const url = "mongodb+srv://abhikhanna2710:newAssessment@cluster0.nabqelz.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(url)
    .then(() => {
        console.log("Connected....")
    }).catch((e) => {
        console.log("Not connected")
        console.log(e.message)
    })
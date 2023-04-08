const mongoose = require("mongoose");

// const url = process.env.MONGO_URL;
// const url = "mongodb+srv://abhikhanna2710:newAssessment@cluster0.nabqelz.mongodb.net/?retryWrites=true&w=majority";

// mongoose.connect(url)
//     .then(() => {
//         console.log("Connected....")
//     }).catch((e) => {
//         console.log("Not connected")
//         console.log(e.message)
//     })


module.exports = () => {
    const connectionParams = {
        useNewUrlParser: "true",
        useUnifiedTopology: "true"
    }
    try {
        mongoose.connect("mongodb+srv://abhikhanna2710:newAssessment@cluster0.nabqelz.mongodb.net/?retryWrites=true&w=majority", connectionParams)
        console.log("Connected Database");
    } catch (error) {
        console.log(error.message)
        console.log("Not connected");
    }
}
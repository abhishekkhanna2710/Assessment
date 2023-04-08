require('dotenv').config();
const express = require("express");
const app = express();
const cors = require('cors');


//MongoDb Connection
const connection = require("./db/Connection.js")
connection();

// middlewares
app.use(express.json())
app.use(cors());

// router file linked 
app.use(require("./Routes/UserRoutes"))



const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
    res.send("Hello World");
})

app.listen(5000, () => {
    console.log(`Server has started on localhost//:${port}`)
})
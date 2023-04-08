const express = require("express");
const app = express();


//MongoDb Connection
require("./db/Connection.js")

// store data in json
app.use(express.json())

// router file linked 
app.use(require("./Routes/UserRoutes"))



const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
    res.send("Hello World");
})

app.listen(5000, () => {
    console.log(`Server has started on localhost//:${port}`)
})
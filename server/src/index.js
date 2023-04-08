const express = require("express");
const app = express();
require("./db/Connection.js")

app.use(express.json())

const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
    res.send("Hello World");
})

app.listen(5000, () => {
    console.log(`Server has started on localhost//:${port}`)
})
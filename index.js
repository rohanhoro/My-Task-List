const express = require("express");
const app = express();

app.use(express.json());


app.use("/home",express.static("public"));

// app.get("/", (req, res) => {
//     res.sendFile(`${__dirname}/public/index.html`)
// })

// app.get("/", (req, res) => {
    
// })

// app.post("/", (req, res) => {

// })

// app.update("/", (req, res) => {

// })

// app.delete("/", (req, res) => {

// })

app.listen(3030);
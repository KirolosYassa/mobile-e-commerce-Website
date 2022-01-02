
/*
touch index.html styles.css app.js
npm init
npm i express https body-parser request
nodemon app.js
*/

const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const https = require("https");

const app = express();
bodyParser.urlencoded({extended: true});
app.use(express.static("public"))


app.get("/", (req,res)=>{
    res.sendFile(__dirname + "/index.html")
})


// app.post("/success.html", (req,res)=>{
//     res.sendFile(__dirname + "/index.html")
// })

app.listen(3000 || Process.env.PORT, () => {
    console.log("Server is running at Port: 3000...")
})
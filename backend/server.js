// https://youtu.be/nUbNn0voiBI?t=1251 backend part video
// run as 
// node server.js

const express = require('express')
const app = express()

const cors = require('cors')

const mongoose = require('mongoose')

app.use(cors())

app.use(express.json()) // parse request  come from front end

// connect to mongoose
// https://youtu.be/nUbNn0voiBI?t=1490
mongoose.connect("mongodb+srv://beehab:learning@testcluster.yfa9e.mongodb.net/notesDB")

app.use("/", require("./routes/noteRoute"))


app.listen(3001, function(){
    console.log("Express server is running on port 3001");
})
require('dotenv').config()
var express = require("express")
var cors = require("cors")
var connectTodatabase = require("./database/db")
var bookRoute = require("./routes/book_routes")
var app = express()
connectTodatabase()
app.use(express.json())
app.use(cors())
app.use("/api/books", bookRoute)
var port = process.env.PORT ||2300
app.listen(port,()=>{
    console.log("the server is running");
    

})


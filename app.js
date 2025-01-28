require('dotenv').config();
const express = require('express')
const app = express()
const cokieParser = require('cookie-parser')
const mongoose = require('mongoose')
app.set("view engine","ejs")
app.use(express.json())
app.use(express.urlencoded({extended:true}))
const connection = require('./config/db.config')
connection()
const userRouter = require("./routes/user.routes")


app.use('/user',userRouter);

app.listen(3000)

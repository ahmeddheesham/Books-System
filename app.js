const express = require('express')
const bodyParser = require("body-parser") 
const mongoose = require('mongoose')
const URL = "mongodb+srv://ahmeddheesham:Ah12345@brngit.ba0zymo.mongodb.net/Brngit?retryWrites=true&w=majority"
const app = express()
const userRouter = require("./routers/users")
const bookRouter = require('./routers/books')

app.use(bodyParser.json()) 

const connectDB = async () => {
    try {
        mongoose.set('strictQuery', false)
        mongoose.connect(URL)
        console.log("Connected to Monog DB")
    } catch (err) {
        console.log(err)
        process.exit()
    }

}
connectDB()

app.use('/' , userRouter)
app.use('/' , bookRouter)









app.listen(5500)
require('dotenv').config({ path: './env/.env' })
const express = require('express')
const contactROUTE = require('../routes/contactROUTES')
const connectdb = require("../config/db")


//app & port & db
connectdb()
const app = express()
const port = process.env.PORT 

//middleware & static files
app.use(express.static('public'))
app.use(express.json())


//routes
app.use('/contact',contactROUTE)


//listening
app.listen(port,(err)=>{
    if (err) {
        console.log(err)
    } else {
        console.log(`listening on port : ${port}`)
    }
})
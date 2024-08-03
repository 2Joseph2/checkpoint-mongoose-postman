require('dotenv').config({ path: './env/.env' })
const mongoose = require('mongoose')


const connectdb = async()=>{
    try{
        await mongoose.connect(process.env.connectionString)
        console.log('you are connected to th db')
    }catch(err){
        console.log(err)
    }
}

module.exports = connectdb
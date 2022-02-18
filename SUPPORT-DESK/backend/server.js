const express=require('express')
const colors=require('colors')
const PORT=process.env.PORT||5000
const connectDB = require('./config/db')
const dotenv=require('dotenv').config()
const {errorHandler}= require('./middlewear/errorMiddlewear')

//connect to database


connectDB()

const app=express()
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(errorHandler)

app.get('/',(req,res)=>{
    res.send('Hello')
})

app.use('/api/users',require('./routes/userRoutes'))

app.listen(PORT,()=> console.log(`Server started on port ${PORT}`))

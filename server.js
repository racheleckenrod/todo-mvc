const express = require('express')
const app = express()
const connectDB = require('./config/database')
const homeRoutes = require('./routes/home')
const todoRoutes = require('./routes/todos')

// the 'dotenv' is required for the ./config/.env pathway to work. in other words without 'dotenv' node cant do anything with .env
require('dotenv').config({path: './config/.env'}) 

// have to actually call the connectDB() function in order for it to connect
connectDB()

// this tells us what we are using for the views- 'ejs'
app.set('view engine', 'ejs')
// in the public folder you will find client side JS and css
app.use(express.static('public'))
// pulls data out of the requests when submitting the forms
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use('/', homeRoutes)
app.use('/todos', todoRoutes)
 
app.listen(process.env.PORT, ()=>{
    console.log('Server is running, you better catch it!')
})    
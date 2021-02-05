// 1 - environment
require('dotenv').config();


//IMPORTS
const express= require('express');
const ejsLayouts = require('express-ejs-layouts')
const multer = require('multer')
const cloudinary = require("cloudinary")

//APP SET-UP
const app = express()
app.set('view engine', 'ejs')

//APP MIDDLEWARE
app.use(ejsLayouts)
app.use(express.urlencoded( { extended: false }))

//ROUTES
app.get('/', (req, res)=> {
    res.send('Welcome to my Express Cloudinary App')
})


//SERVER PORT
const PORT = process.env.PORT || 8000;
app.listen(PORT, ()=> {
    console.log(`server running on PORT: ${PORT}`)
})
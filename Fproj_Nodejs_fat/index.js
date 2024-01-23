const mongoose = require('mongoose');
const User = require('./models/User'); 
const Blog = require('./models/Blog'); 
const UserController = require('./controllers/UserController');

// to connect with data base
mongoose.connect('mongodb://127.0.0.1:27017/FBroj_BloggingWeb').then(()=>
{
    console.log('great!!!  Sucessfully connected to db');
}).catch((error)=>
{
    console.log("Sorry you can't connect with database"+ error);
})



// UserController.Register('FatmaIbrahim','1234567','Fatma','1995-7-6')
// UserController.Login('FatmaIbrahim','1234567')

// make hashing for passs ------- puting mail instead of firs name ---------  test delete and show user 
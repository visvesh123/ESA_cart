const express = require('express');
const  mongoose = require('mongoose');
const config = require('./config/index')

var bodyParser = require('body-parser')
require('dotenv').config()

const cart = require('./models/cart')
const {updateCart , getListItems }  = require('./controllers/cart');
const { BSONRegExp } = require('bson');

const app = express()
app.use(bodyParser.json())

const { MONGO_URI, MONGO_DB_NAME ,PORT } = config;


mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }) // Adding new mongo url parser
  .then(() => console.log("Connected to database  cluster"))
  .catch((err) => console.log(err));

  app.get('/rest/v1/users/:uuid/cart', getListItems)
app.put('/rest/v1/users/:uuid/cart', updateCart )




// cart.create({
//   userId : "100",
//   productId : "12",
//   quantity : 2
// })



app.listen(PORT, ()=>{
    console.log(`Connected to port ${PORT}`)
})
const express = require('express');
const  mongoose = require('mongoose');
const config = require('./config/index')
require('dotenv').config()

const product = require('./models/product')
const ProductsList = require('./controllers/product');
const app = express()

const { MONGO_URI, MONGO_DB_NAME ,PORT } = config;


mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
   
    useUnifiedTopology: true,
  }) // Adding new mongo url parser
  .then(() => console.log("Connected to database in cluster"))
  .catch((err) => console.log(err));



app.get('/rest/v1/products', ProductsList)

// product.create({
//     "productId": "12445dsd234",
//  "category": "Modile",
//  "productName": "Samsung",
//  "productModel": "GalaxyNote",
// "price": 700,
// "availableQuantity": 10
// })

app.listen(PORT, ()=>{
    console.log(`Connected to port ${PORT}`)
})
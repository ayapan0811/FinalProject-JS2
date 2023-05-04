// variable to receive the JSON file
const filePath = "../data/Shop.json";
// 
const fileManager = require('fs');

// defining and analyzing the list of products
let productList = JSON.parse(fileManager.readFileSync(filePath, "utf8"));

// setting port for new page
const PORT = 5500;
const express = require('express');
const cors = require('cors');
const app = express();

// 
app.use(express.json());
app.use(cors());

// the APP variable gets a complement and a function to check the json file
app.get("/product-api",function(req, res){
    res.json(productList);
});

// 
app.listen(PORT, function(){
    console.log(`Server is running port ${PORT}`);
});
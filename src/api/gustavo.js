const filePath = "../data/Shop.json";
const fileManager = require('fs');

let productList = JSON.parse(fileManager.readFileSync(filePath, "utf8"));

const PORT = 5500;
const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());

app.get("/product-api",function(req, res){
    res.json(productList);
});

app.listen(PORT, function(){
    console.log(`Server is running port ${PORT}`);
});
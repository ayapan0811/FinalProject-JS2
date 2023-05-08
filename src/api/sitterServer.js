const filePath = "../data/sitter.json";
const fileManager = require('fs');

let sitterList = JSON.parse(fileManager.readFileSync(filePath, "utf8"));
console.log(sitterList);

const PORT = 3100;
const express = require('express');
const app = express();
const cors = require("cors")

app.use(express.json());
app.use(cors())

app.get("/sitter-api",function(req, res){
    res.json(sitterList);
});

app.listen(PORT, function(){
    console.log(`Server is running port ${PORT}`);
});

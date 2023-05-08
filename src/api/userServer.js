const filePath = "../data/user.json";
const fileManager = require('fs');

let userList = JSON.parse(fileManager.readFileSync(filePath, "utf8"));
console.log(userList);

const PORT = 3200;
const express = require('express');
const app = express();
const cors = require("cors")

app.use(express.json());
app.use(cors())

app.get("/user-api",function(req, res){
    res.json(userList);
});

app.listen(PORT, function(){
    console.log(`Server is running port ${PORT}`);
});
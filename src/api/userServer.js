const filePath = "../data/user.json";
const fileManager = require('fs');
const bodyParser = require('body-parser');

let userList = JSON.parse(fileManager.readFileSync(filePath, "utf8"));
console.log(userList);

const PORT = 3200;
const express = require('express');
const app = express();
const cors = require("cors")

app.use(express.json());
app.use(cors());

app.use(bodyParser.urlencoded({
    extended: true
}));

app.get("/user-api",function(req, res){
    console.log(req.body.formId);
    res.json(userList);
});

app.post("/form", function(req,res){   
    console.log(req.body);
    let newUser = req.body;
    userList.push(newUser);
    fileManager.writeFileSync(filePath, JSON.stringify(userList));
});

app.use(express.static(__dirname + '/statics'));

app.listen(PORT, function(){
    console.log(`Server is running port ${PORT}`);
});
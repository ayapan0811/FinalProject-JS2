const filePath = "../data/user.json";
const fileManager = require('fs');
const bodyParser = require('body-parser');

let userList = JSON.parse(fileManager.readFileSync(filePath, "utf8"));
console.log(userList);

// fileManager.readFile(filePath, "utf8", function(error,data){
    
//     let newUser = {
//         "id":userList[userList.length-1].id+1,
//         "name": name,
//         "email": email,
//         "password": password
//     }
//     userList.push(newUser);
//     fileManager.writeFileSync(filePath,JSON.stringify(userList)); 

// })

// app.use(bodyParser.urlencoded({
//     extended: true
// }));

const PORT = 3200;
const express = require('express');
const app = express();
const cors = require("cors")

app.use(express.json());
app.use(cors());

app.post("/user-api",function(req, res){
    res.json(userList);
});

app.listen(PORT, function(){
    console.log(`Server is running port ${PORT}`);
});
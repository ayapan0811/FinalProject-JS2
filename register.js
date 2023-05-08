const filePath = './src/data/user.json';
const fileManager = require('fs');
fileManager.readFile(filePath,"utf8",function(error,data){
    if(error){
        console.log("I could not read the file")
    } else {
        console.log(JSON.parse(data))
    }

    userList = JSON.parse(data);

    let newUser = {
        "id":userList[userList.length-1].id+1,
        "name":"testname",
        "email":"test@test.com",
        "password" :"testpass"
    }

    userList.push(newUser);

    fileManager.writeFileSync(filePath,JSON.stringify(userList));
})
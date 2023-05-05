// variable to receive the JSON file
const filePath = "../data/sitter.json";
// 
const fileManager = require('fs');

// defining and analyzing the list of products
let sitterList = JSON.parse(fileManager.readFileSync(filePath, "utf8"));
console.log(sitterList);

// export default sitterList;

// setting port for new page
const PORT = 3100;
const express = require('express');
const app = express();
const cors = require("cors")

// 
app.use(express.json());
app.use(cors())

// the APP variable gets a complement and a function to check the json file
app.get("/sitter-api",function(req, res){
    res.json(sitterList);
});

// 
app.listen(PORT, function(){
    console.log(`Server is running port ${PORT}`);
});

// function JSONloader(){
//     return(
//         <section>
//             {sitterList}
//         </section>
//     );
// }
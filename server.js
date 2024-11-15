//install: node js
//install web server package: express >npm install exe 
var express = require("express");
var server = express();

//web root
server.use(express.static(__dirname+"/AgencyProject"));

server.listen(80, ()=>{
    console.log("Server is running at port 80.");    
})

// server.get("/profolio", (req, res)=>{
//     //DB
//     res.send("Profolio");
// })
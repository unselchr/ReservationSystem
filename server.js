// denpendencies

var path = require("path");
var bodyParser = require("body-Parser");
var express = require("express");

// Set up express

var app = express();
PORT = process.env.port || 3000;




// Sets up app for data parsing


app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());


// Data Objects





// Routes

app.get("/",function(req, res){
    res.sendfile(__dirname + "index.html");
})

app.get("/index",function(req, res){
    res.sendfile(__dirname + "index.html");
})



// Listener

app.listen(PORT, function(){
    console.log("App listening on PORT" + PORT);
})



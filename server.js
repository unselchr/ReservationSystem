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

var reservations = [];








// Routes

app.get("/",function(req, res){
    res.sendFile(__dirname + "/index.html");
})

app.get("/index",function(req, res){
    res.sendFile(__dirname + "/index.html");
})

app.get("/Table",function(req, res){
    res.sendFile(__dirname + "/Table.html");
})

app.get("/Reservations",function(req, res){
    res.sendFile(__dirname + "/Reservations.html");
})

app.post("/newRes", function(req, res ){
    var reservation = req.body;
    // RegEx possibly
    reservations.push(reservation);
    res.json(reservation);
    if(reservations.length<=5){
        req.body=true;
    }
    else{
        req.body=false;
    }
    //console.log(reservations);
})
 
app.get ("/viewTables", function ( req, res) {
    var tables=[];
    for(var i=0;i<5&&i<reservations.length;i++){
        tables.push(reservations[i]);
    }
    
    res.json(tables);
    
})
app.get("/waitlist",function(req,res){
    var waitlist=[];

    for(var i=5;i<reservations.length;i++){
        waitlist.push(reservations[i]);
    }

    res.json(waitlist);
})
app.post("/clear",function(req,res){
    console.log("clearing");
    reservations=[];
})
// Listener

app.listen(PORT, function(){
    console.log("App listening on PORT" + PORT);
})




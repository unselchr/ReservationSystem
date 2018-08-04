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
    if(reservations.length<=5){
        res.send(true);
    }
    else{
        res.send(false);
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 59df6b87bf8f50dfc2c9ffdff09a133978b6e4d5
>>>>>>> 3a5f3d8f8baa4242ebd5fae9be700d9476bcec98
=======
>>>>>>> 2588298eed2c6e9901fae416f0efe08fd0528200
})
// Listener

app.listen(PORT, function(){
    console.log("App listening on PORT" + PORT);
})




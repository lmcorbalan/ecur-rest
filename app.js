const express = require('express');
const app = express();
const mongoose = require('mongoose');

//DB setup
mongoose.connect("mongodb://mongo:27017");

app.get('/', function(req, res){
 res.send("I'm alive");
});

app.listen(3000, function(){
 console.log('Example app listening on port 3000!');
});

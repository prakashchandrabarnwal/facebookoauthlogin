var app = require('express')();
var http = require('http').Server(app);
var express = require('express');
var path = require("path");
var PORT = 8080 || process.env.PORT;


app.use(express.static(__dirname + './../client/'));


http.listen( PORT, function(){
 console.log('listening on *:8082');
});
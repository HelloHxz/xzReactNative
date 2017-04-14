
var express = require('express')

var app = express()

var fs = require('fs')
var path = require('path')




app.use(express.static(__dirname));


app.listen(5555, function() {
	console.log("====================");
	console.log('http://localhost:5555/server, Ctrl+C to stop');
	console.log("====================");
})

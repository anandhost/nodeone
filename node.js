var express = require('express');
var app = express();
var fs = require('fs');

var user = {
	"user4" : {
		"name" : "mohit",
		"password" : "pass4",
		"profession" : "tchrr",
		"id" : 4
	}
	9
};




app.get('/addUser', function (req, res){
	
	fs.readFile( __dirname + "/" + "users.json", 'utf-8', function (err, data) {
		data = JSON.parse(data);
		data["user4"]= user["user4"];
		console.log(data);
		res.send(JSON.stringify(data));
	});
})

var server = app.listen(8081, function () {

	var host = server.address().address
	var port = server.address().port

	console.log("Listing at http://%s:%s", host, port)
})

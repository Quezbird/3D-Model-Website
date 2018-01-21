var http = require('http');
var fs = require('fs');
const express = require('express')
const bodyParser = require('body-parser')

console.log("Running ... ");
 
// Create a new instance of express
const app = express()
 
// Tell express to use the body-parser middleware and to not parse extended bodies
app.use(bodyParser.urlencoded({ extended: false }))

app.post('*', function (req, res) {
	console.log("Post :"+req.url);
	//const body = req.body.Body
	//res.set('Content-Type', 'text/plain')
	res.end('');
})

app.get('*', function (req, res) {
	console.log("Requested :"+req.url);
	if(req.url == "/"){
		res.sendFile( __dirname + "/files/index.html" );
		console.log("Sent : files/index.html");
	}else{
		res.sendFile( __dirname + "/files/"+req.url);
		console.log("Sent : files/"+req.url);
	}
})

 
// Tell our app to listen on port 3000
app.listen(3000, function (err) {
  if (err) {
    throw err
  }
 
  console.log('Server started - go to http://localhost:3000/')
})



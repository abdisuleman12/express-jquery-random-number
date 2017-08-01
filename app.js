var express = require('express');


function randomNumber(min, max){
    return Math.floor(Math.random() * (1 + max - min) + min);
}

var random = randomNumber(1,4);

var randomString = random.toString();


var app = express();
var port = 5000;

app.use(express.static('public'));

app.use('/random', function(req, res) {  

    res.send(randomString)

});

//// Serve static files, our first 'route'
// '/' is a wild card for ANY route, this is the catch all bucket
app.get('/', function(req, res) {
    res.send('Request recieved!')
});

// Start up our server
app.listen(port, function(){
  console.log('listening on port', port);
});


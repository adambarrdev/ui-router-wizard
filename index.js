var express = require('express');

var app = express();

var port = 5000;

// expose all css/js/index.html files as static resources
app.use(express.static('public'));
app.get('/', function(req, response){
   response.send('hello world');
});
app.listen(port, function(){
    console.log("running server on port " + port);
});

// just run 'node index.js' to start server
// or use the shortcut 'npm start'
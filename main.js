//start MongoDB by entering:
//mongod --smallfiles
// in a second terminal get node js running by entering:
//node server.js
//git add -A  git commit -m "schema and mocha unhunh"  git push origin master

var express = require('express');
var routes = require('./app/routes/index.js');
var path = require('path');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use('/controllers', express.static(process.cwd() + '/app/controllers'));
app.use('/public', express.static(process.cwd() + '/public'));
app.use('/common', express.static(process.cwd() + '/app/common'));


routes(app);
var port = process.env.PORT || 8080;
app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});

////
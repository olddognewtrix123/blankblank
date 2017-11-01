//start MongoDB by entering:
//mongod --smallfiles
// in a second terminal get node js running by entering:
//node server.js
//git add -A  git commit -m "schema and mocha unhunh"  git push origin master

var express = require('express');
var path = require('path');
var app = express();
var port = process.env.PORT || 8080;
app.set('port', (process.env.PORT || 5000));

app.use('/controllers', express.static(process.cwd() + '/app/controllers'));
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', (req, res, next) => res.sendFile(path.join(__dirname, './public/hi.html')) ) ;
app.get('/who', (req, res, next) => res.sendFile(path.join(__dirname, './public/whodat.html')) ) ;


app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});

////
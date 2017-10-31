var express = require('express');
var path = require('path');
var app = express();
var port = process.env.PORT || 8080;
app.set('port', (process.env.PORT || 5000));

app.use('/controllers', express.static(process.cwd() + './clientClickControllers'));
app.get('/', (req, res, next) => res.sendFile(path.join(__dirname, './hi.html')) ) ;
app.get('/who', (req, res, next) => res.sendFile(path.join(__dirname, './whodat.html')) ) ;


app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
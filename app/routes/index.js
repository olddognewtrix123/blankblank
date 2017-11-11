'use strict';

var path = process.cwd();
;

module.exports = function (app) {

app.get('/', function (req, res) { res.sendFile(path + '/public/hi.html'); });

//app.get('/who', (req, res, next) => res.sendFile(path.join(__dirname, './public/who.html')) ) ;
  app.get('/who', function (req, res) { res.sendFile(path + '/public/who.html'); });

}

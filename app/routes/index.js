'use strict';

var path = process.cwd();
var ClickHandler = require(path + '/app/controllers/clickHandler.server.js');


module.exports = function (app) {

  app.get('/', function (req, res) { res.sendFile(path + '/public/hi.html'); });

  app.get('/who', function (req, res) { res.sendFile(path + '/public/who.html'); });
  
  //app.route('/api/:id/clicks').get(ClickHandler.getClicks)

}

// using    https://codeburst.io/hitchhikers-guide-to-back-end-development-with-examples-3f97c70e0073
// using    https://github.com/ratracegrad/node-mongo-demo/blob/master/app.js

// all stuff mongo  https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/

// using and running mongodb direct in c9 workspace    https://community.c9.io/t/setting-up-mongodb/1717

// get the mongo server running by opening a separate terminal and enter './mongod'

//start MongoDB by entering:
//mongod --smallfiles
// in a second terminal get node js running by entering:
//node server.js
//git add -A  git commit -m "schema and mocha unhunh"  git push origin master

var express = require("express");
var app = express();
//var port = 3000;
var port = process.env.PORT || 8080;
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
var path = process.cwd();

// middleware that exposes the controllers
app.use('/controllers', express.static(process.cwd() + '/app/controllers'));
app.use('/public', express.static(process.cwd() + '/public'));


var mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/myapp");
var nameSchema = new mongoose.Schema({
    firstName: String,
    lastName: String
});
var User = mongoose.model("User", nameSchema);

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});



app.post("/addname", (req, res) => {
    var myData = new User(req.body);
    myData.save()
        .then(item => {
            res.send("Name saved to database");
        })
        .catch(err => {
            res.status(400).send("Unable to save to database");
        });
});


app.route('/goData')
		.get(function (req, res) {
			res.sendFile(path + '/public/data.html');
		});


app.listen(port, () => {
    console.log("Server listening on port " + port);
});
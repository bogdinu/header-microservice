'use strict';

var http = require("http");

module.exports = function (app) {
	app.route('/').get(function(req, res){
		//app.get('/', function(req, res){ --> alternate sytax : what's the difference ?

		var objOut = {};
		objOut.ipaddress = req.headers['x-forwarded-for'];
		var languages = req.headers['accept-language'];
		var arrLangs = languages.split(",");
		objOut.language = arrLangs[0];
		//objOut.software = req.headers['user-agent'];
		objOut.software = req.headers["user-agent"].substring(req.headers["user-agent"].indexOf("(") + 1, req.headers["user-agent"].indexOf(")"))
		

		res.send(JSON.stringify(objOut));
	});
};

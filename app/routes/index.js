'use strict';

var moment = require("moment")

module.exports = function (app) {
	app.route('/:timeStamp').get(function(req, res){
		//app.get('/', function(req, res){ --> alternate sytax : what's the difference ?

		var objOut = {};
		/*if (isNaN(req.params.timeStamp)){ //if is not a number, it should be a natural language form
			objOut.natural = req.params.timeStamp;
		}
		else { //unix format
			objOut.unix = req.params.timeStamp;
			var unixDate = moment.unix(req.params.timeStamp);
			objOut.natural = moment(unixDate).format('MMMM D YYYY');
		}*/
		
		objOut.unix = req.params.timeStamp;
		objOut.natural = moment(req.params.timeStamp).format('MMMM D YYYY');
		
		res.send(JSON.stringify(objOut));
	});
};

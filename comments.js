// comments.js

(function(){
	'use strict';

	var mongoose = require('mongoose');

	module.exports = function() {

		// this initializes the schema for the model
	    var Comments = new mongoose.Schema({
	        title     : String,
	        body      : String,
	        date      : Date
	    });

		// now we compile our model and register it

	    mongoose.model('Comments', Comments);

		// If, for example, we assume the model's name is Kitten,
		// then we would have used the following to compile and register it:
		// mongoose.model('Kitten', Kitten);

		// once this has been done, one can obtain the model
		// in other files with
		// Kitten = mongoose.model('Kitten');
	};
}());

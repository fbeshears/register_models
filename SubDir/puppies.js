// puppies.js

(function(){
	'use strict';

	var mongoose = require('mongoose');

	module.exports = function() {

			// this initializes the schema for the model
			var Puppy = mongoose.Schema({type: String, name: String});

			// Note: methods must be added to the schema before compiling it with mongoose.model()

			try {
				Puppy.methods.speak = function () {
				  var greeting = this.name ? 'WOOF! My name is ' + this.name : 'I do not have a name';
				  console.log(greeting);
				};
			}
			catch(err) {
				console.error('Still cannot add method speak');
				throw err;
			}

			// now we compile our model and register it

			mongoose.model('Puppy', Puppy);

			// If, for example, we assume the model's name is Puppy,
			// then we would have used the following to compile and register it:
			// mongoose.model('Puppy', Puppy);

			// once this has been done, one can obtain the model
			// in other files with
			// Puppy = mongoose.model('Puppy');
	};
}());

//kitten.js

/*jslint         node    : true, continue : true,
  devel  : true, indent  : 2,    maxerr   : 50,
  newcap : true, nomen   : true, plusplus : true,
  regexp : true, sloppy  : true, vars     : false,
  white  : true
*/

(function(){
	'use strict';

	var mongoose = require('mongoose');

	module.exports = function() {

			// this initializes the schema for the model
			var Kitten = mongoose.Schema({ name: String});

			// NOTE: methods must be added to the schema before compiling it with mongoose.model()

			try {
				Kitten.methods.speak = function () {
				  var greeting = this.name ? 'Meow name is ' + this.name : 'I do not have a name';
				  console.log(greeting);
				};
			}
			catch(err) {
				console.error('Still cannot add method speak');
				throw err;
			}

			// now we compile our model and register it 

			mongoose.model('Kitten', Kitten);

			// If, for example, we assume the model's name is Kitten,
			// then we would have used the following to compile and register it:
			// mongoose.model('Kitten', Kitten);

			// once this has been done, one can obtain the model
			// in other files with
			// Kitten = mongoose.model('Kitten'); 

	};

}());
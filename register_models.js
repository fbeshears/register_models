// register_models.js

/*
this will  initialize all of your Schemas and
register all your models for a given node session.
see the readme.txt file for a further discussion

from another file (e.g. main.js), this can be called with:

var register_models = require('./register_models');
register_models();
*/

(function(){

  module.exports = function(){

		var mongoose = require('mongoose');
		var Schema = mongoose.Schema; 

		var files = ['kitten.js', 'comments.js'];

		for(fn in files) {

			var path_fn = "./" + files[fn];

			var exported_model = require(path_fn);

			exported_model(mongoose, Schema);

		}


	};

})();

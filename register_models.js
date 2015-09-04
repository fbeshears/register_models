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
	'use strict';

	var register_models;

	register_models = function(){

		var exported_model, i, path_fn;
		var files = ['kitten.js', 'comments.js'];

		for(i = 0; i < files.length; i++) {
			path_fn = "./" + files[i];
			exported_model = require(path_fn);
			exported_model();
		}
	};
	module.exports = register_models;
}());

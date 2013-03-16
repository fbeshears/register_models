//main.js


function main(cat_name) {

  var mongoose = require('mongoose');

	mongoose.connect('mongodb://localhost/test', function(err){
		if(err) {
			throw err;
		}
		console.log('connected to MongoDB');
	});


	var register_models = require('./register_models');
	register_models();


	var Kitten = mongoose.model("Kitten");


	var cat = new Kitten({ name: cat_name });

	// note that since this has a callback, the
	// save happens asychronously. So, the find
	// that follows may not (probably will not)
	// retrieve the cat you're trying to save.

	cat.save(function (err, cat) {
	  if (err) {
	  	console.log("could not save " + cat_name);
	  	throw(err);					// TODO handle the error
	  } 
	  console.log("saved " + cat_name);
	});

	// will find the cats that have been stored, but
	// not the cat that we're trying to asychronously store
	// with the save function above.

	Kitten.find( function (err, kittens) {
		  if (err) {
		  	console.error("could not find kittens");
		  	throw(err);
		  } 
		  else if( kittens.length <= 0 ) {
		  	console.log('I have no kittens');
			} else {
				console.log(kittens); 	
			}
	});

}

/*

cat names to try passing to main:
fluffy, morris, felix, sylvester

*/

main("puss_n_boots");

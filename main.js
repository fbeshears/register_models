//main.js

/*jslint         node    : true, continue : true,
  devel  : true, indent  : 2,    maxerr   : 50,
  newcap : true, nomen   : true, plusplus : true,
  regexp : true, sloppy  : true, vars     : false,
  white  : true
*/

(function(){
  'use strict';

  var cat_name, find_kittens, Kitten, main, save_cat,
      mongoose        = require('mongoose'),
      register_models = require('./register_models');

  register_models();

  Kitten          = mongoose.model('Kitten'),


  find_kittens = function() {
    Kitten.find( function (err, kittens) {
        if (err) {
          console.error('could not find kittens');
          throw err;
        } 
        
        if ( kittens.length <= 0 ) {
          console.log('I have no kittens');
        } 
        else {
          console.log(kittens);   
        }
        mongoose.disconnect();

    });
  };

  save_cat = function(cat_name) {
    var cat = new Kitten({ name: cat_name });

    // note that since this has a callback, the
    // save happens asychronously. So, the find
    // that follows may not (probably will not)
    // retrieve the cat you're trying to save.

    cat.save(function (err) {
      if (err) {
        console.error('could not save ' + cat_name);
        throw err;          // handle the error
      } 
      console.log('saved ' + cat_name);

      find_kittens();

    });

  };

  main = function(cat_name) {

        
    mongoose.connect('mongodb://localhost/test', function(err){
      if(err) {
        throw err;
      }
      console.log('connected to MongoDB');
      save_cat(cat_name);
    });


  };



  if(require.main === module) {

    /*

    call main from command shell with, for example:

    > node main.js morris

    other cat names to try passing to main:
    fluffy, morris, felix, sylvester, puss_n_boots

    */

    cat_name = process.argv[2];

    if ( typeof  cat_name !== 'undefined' && cat_name !== null) {

      main(cat_name); 

    }
    else {
      console.log('Call main with cat name like morris. For example:');
      console.log('> node main.js morris');
    }




  }


}());
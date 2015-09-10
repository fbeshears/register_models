// main.js
(function(){
    'use strict';

    var cat_name, pup_name, find_kittens, Kitten, find_puppies, Puppy;
    var main, save_cat, save_pup;
    var mongoose = require('mongoose');
    var register_models = require('./register_models');

    register_models();
    Kitten = mongoose.model('Kitten');
    Puppy = mongoose.model('Puppy');

    find_kittens = function(mTerm) {

        Kitten.find(function (err, kittens) {
            if (err) {
                console.error('could not find kittens');
                throw err;
            }

            if (kittens.length <= 0 ) {
                console.log('I have no kittens');
            } else {
                console.log(kittens);
            }

            // Only disconnect if not calling puppies (i.e. mTerm = 1)
            if (mTerm) {
                mongoose.disconnect();
            }
        });
    };

    save_cat = function(cat_name, mongoTerm) {
        var cat = new Kitten({type: "A Kitty", name: cat_name});

        /* Note:
            that since this has a callback, the
            save happens asychronously. So, the find
            that follows may not (probably will not)
            retrieve the cat you're trying to save. */

        cat.save(function (err) {
            if (err) {
                console.error('could not save ' + cat_name);
                throw err;          // handle the error
            }
            console.log('saved ' + cat_name);

            if (mongoTerm) {
                find_kittens(1);
            } else {
                find_kittens();
            }
        });
    };

    find_puppies = function(mTerm) {

        Puppy.find(function (err, puppies) {
            if (err) {
                console.error('could not find puppies');
                throw err;
            }

            if (puppies.length <= 0 ) {
                console.log('I have no puppies');
            } else {
                console.log(puppies);
            }

            // will not get to disconnect if no pup_name
            mongoose.disconnect();
        });
    };

    save_pup = function(cat_name) {
        var pup = new Puppy({type: "A Pup", name: pup_name});

        /* Note:
            that since this has a callback, the
            save happens asychronously. So, the find
            that follows may not (probably will not)
            retrieve the pup you're trying to save. */

        pup.save(function (err) {
            if (err) {
                console.error('could not save ' + pup_name);
                throw err;          // handle the error
            }
            console.log('saved ' + pup_name);

            find_puppies();
        });
    };

    main = function(cat_name, pup_name) {

        mongoose.connect('mongodb://localhost/test', function(err) {

            if(err) {
                throw err;
            }
            if (pup_name) {
                save_cat(cat_name);
                save_pup(pup_name);
            } else {
                save_cat(cat_name, 1);
            }
        });
    };

    if (require.main === module) {
        /*
            * Call main from command shell with, for example:

            > node main.js kitty doggie

            * Cat name and then dog name
        */
        cat_name = process.argv[2];
        pup_name = process.argv[3];

        if (typeof cat_name !== 'undefined' && cat_name !== null) {

            if (typeof pup_name !== 'undefined' && pup_name !== null) {
                main(cat_name, pup_name);
            } else {
                main(cat_name);
            }

        } else {
            console.log("\nCall main with cat and dog names. For example:");
            console.log("> node main CAT DOG\n");
        }
    }
}());

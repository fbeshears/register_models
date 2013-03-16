register_models
===============

demo of javascript, mongoose, mongoDB

You need to have node.js, mongoDB, and npm installed.

To install mongoose, you need to run:

> npm install

in the directory where main.js and
the package.json files live.

After running npm install, you should 
have a node_modules subdirectory

Now run:

> node main.js

Even if all goes well, mongoose will hang. To escape,
hit ctrl-C.

Also, the save and the find functions run asychronously.
So, you'll get a listing of the cats you've saved already
and then a message that the cat you're trying to save 
has been saved (if all goes well).

When you run the program again, you'll see the cat you
saved the last time around in the listing of all cats saved.

To save different cat names,
edit the cat_name passed to main() in
main.js

var exec = require('cordova/exec');

var SquarePOS = "SquarePOS"; // This is just for code completion uses.

var SquarePOS = function() {}; // This just makes it easier for
// All of your plugin functions go below this. 
// Note: We are not passing any options in the [] block for this, so make sure you include the empty [] block.
SquarePOS.startTransction = function(onSuccess, onError) {
   exec(onSuccess, onError, SquarePOS, "startTransction", []);
};
module.exports = SquarePOS;
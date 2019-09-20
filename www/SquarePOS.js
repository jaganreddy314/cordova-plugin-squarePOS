var exec = require('cordova/exec');

var SquarePOS = "SquarePOS"; // This is just for code completion uses.

var SquarePOS = function() {}; // This just makes it easier for
// All of your plugin functions go below this. 
// Note: We are not passing any options in the [] block for this, so make sure you include the empty [] block.
SquarePOS.startTransaction = function(options, onSuccess, onError) {
   var params = {
       amount: options.amount ? options.amount : 1,
       currencyCode: options.currencyCode? options.currencyCode : "AUD",
       squareClientId: options.squareClientId ? options.squareClientId : "",
       squareCallbackFunction: options.squareCallbackFunction? options.squareCallbackFunction : ""
   };
   return exec(onSuccess, onError, SquarePOS, "startTransaction", [params]);
};
module.exports = SquarePOS;
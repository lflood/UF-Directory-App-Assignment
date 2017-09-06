'use strict';
/* 
  Import modules/files you may need to correctly run the script. 
  Make sure to save your DB's uri in the config file, then import it with a require statement!
 */
var fs = require('fs'),
    mongoose = require('mongoose'), 
    Schema = mongoose.Schema, 
    Listing = require('./ListingSchema.js'), 
    config = require('./config');

/* Connect to your database */
mongoose.connect('mongodb://cen:cen3031@ds127564.mlab.com:27564/bootcamps');

/* 
  Instantiate a mongoose model for each listing object in the JSON file, 
  and then save it to your Mongo database 
 */

var connection = mongoose.connection;
connection.on('connection', function(){
})

var listingData;

fs.readFile('listings.json', 'utf8', function(err, data) {
     if(err) throw err;
     listingData = JSON.parse(data);
     console.log(listingData);

     for(var i = 0; i < listingData.entries.length; i++){
        var listing = new Listing({
          code: listingData.entries[i].code,
          name: listingData.entries[i].name,
          coordinates: listingData.entries[i].coordinates,
          address: listingData.entries[i].address
        });
        listing.save(function(err) {
           if (err) throw err; 
        });
      };
});
 
/* 
  Once you've written + run the script, check out your MongoLab database to ensure that 
  it saved everything correctly. 
 */
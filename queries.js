var fs = require('fs'),
    mongoose = require('mongoose'), 
    Schema = mongoose.Schema, 
    Listing = require('./ListingSchema.js'), 
    config = require('./config');

/* Fill out these functions using Mongoose queries*/

mongoose.connect('mongodb://cen:cen3031@ds127564.mlab.com:27564/bootcamps');

var connection = mongoose.connection;
connection.on('connection', function(){
})

var findLibraryWest = function() {
  Listing.find({ name: 'Library West' }, function(err, listings) {
  if (err) throw err;

  console.log(listings);
});

};
var removeCable = function() {
 Listing.findOneAndRemove({ code: 'CABL' }, function(err) {
  if (err) throw err;

  // we have deleted the listing
  console.log('Listing deleted!');
});

};
var updatePhelpsLab = function() {
  Listing.findOneAndUpdate({ name: 'Phelps Laboratory' }, { address: '102 Phelps Lab, Gainesville, FL 32611' }, function(err, listings) {
    if (err) throw err;

    // we have the updated listing returned to us
    console.log(listings);
  });

};
var retrieveAllListings = function() {
  Listing.find({}, function(err, listings){
    if(err) throw err;

    console.log(listings);
  });
};

findLibraryWest();
removeCable();
updatePhelpsLab();
retrieveAllListings();
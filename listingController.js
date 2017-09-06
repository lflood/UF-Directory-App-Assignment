angular.module('listings').controller('ListingsController', ['$scope', 'Listings', 
  function($scope, Listings) {
    $scope.listings = Listings;
    $scope.detailedInfo = {};
    $scope.code;
    $scope.name;
    $scope.latitude;
    $scope.longitude;
    $scope.address;
    $scope.showCode;
    $scope.showName;
    $scope.showLatitude;
    $scope.showLongitude;
    $scope.showAddress;


    /* 
      Implement these functions in the controller to make your application function 
      as described in the assignment spec. 
     */
    $scope.addListing = function() {
      $scope.listings.push({
        'code': $scope.code,
        'name': $scope.name,
        'coordinates':{
        'latitude': $scope.latitude,
          'longitude': $scope.longitude
        },
        'address': $scope.address
      });
       $scope.code = '';
       $scope.name = '';
       $scope.latitude = '';
       $scope.longitude = '';
       $scope.address = '';
    };
    $scope.deleteListing = function(index) {
    var listArray = eval($scope.listings);
    for(var i = 0; i < listArray.length; i++ ) {
      if( listArray[i] === index ) {
        break;
      }
    }
      $scope.listings.splice(index, 1);
    };
    $scope.showDetails = function(entry) {
      $scope.detailedInfo = entry;
      /*var index = 0;
      var index = $scope.listings.findIndex(x=>x.name === name)

      for(var i = 0; i<$scope.listings.length; i++){
        if(i == index){
          $scope.showCode = $scope.listings[i].code;
        }
      }*/
    };
  }
]);
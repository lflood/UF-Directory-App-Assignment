angular.module('listings').controller('ListingsController', ['$scope', 'Listings', 
  function($scope, Listings) {
    $scope.listings = Listings;
    $scope.detailedInfo = undefined;
    $scope.code;
    $scope.name;
    $scope.latitude;
    $scope.longitude;
    $scope.address;

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
    $scope.showDetails = function(index) {
    	$scope.listings({
    		code: $scope.code(index),
    		name: $scope.name(index),
    		latitude: $scope.latitude(index),
    		longitude: $scope.longitude(index),
    		address: $scope.address(index)
    	});
    };
  }
]);
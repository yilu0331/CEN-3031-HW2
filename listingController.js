angular.module('listings').controller('ListingsController', ['$scope', 'Listings', 
  function($scope, Listings) {
    $scope.listings = Listings;
    $scope.detailedInfo = undefined;

    /* 
      Implement these functions in the controller to make your application function 
      as described in the assignment spec. 
      display listing
      
     */

     $scope.searchListing = function(input){
   
      /*
      if(input==null){
        $scope.listings = Listings;
      }else{
        var inputName = [];
        Listings.forEach(function(listing,index){
       
          if(listing.code.toLowerCase().indexOf(input.toLowerCase())>=0 || listing.name.toLowerCase().indexOf(input.toLowerCase())>=0){
            inputName.push(listing);
          }
        });
            $scope.listings=inputName;
      }
      */

     

    };

    $scope.addListings =function(){
      $scope.listings.push({code: $scope.listings.buildingCode, name: $scope.listings.buildingName, address: $scope.listings.buildingAddress,
       coordinates: {latitude:$scope.listings.buildingLatitude, longitude: $scope.listings.buildingLongitude}});
      $scope.listings.buildingCode = "";
      $scope.listings.buildingName = "";
      $scope.listings.buildingAddress = "";
      $scope.listings.buildingLatitude = "";
      $scope.listings.buildingLongitude = "";
    };



    $scope.showDetails = function(index){
     $scope.details = $scope.listings[index];
     console.log("details");
     // $scope.details=$scope.listings[$scope.listings.indexOf(indexOf)];
    };

    $scope.deleteListing = function (index) {
      var index = $scope.listings.indexOf(index);
      $scope.listings.splice(index, 1);

};
  
    // $scope.clear=function(){
    //   for(var i=0; i<5; i++){
    //     document.getElementById("tag"+i).value="";
    //   };
  
    // }
/*
    $scope.deleteListing = function(index) {};
    $scope.showDetails = function(index) {};
    $scope.searchListing = function(index){}；
*/

  }
]);
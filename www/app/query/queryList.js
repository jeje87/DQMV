angular.module('dqmv').controller('queryListCtrl', ['$scope','localDataService', function ($scope,localDataService) {

    $scope.queries={};

     localDataService.getData(function(data) {
         $scope.queries=data.savedData;
     });


}]);

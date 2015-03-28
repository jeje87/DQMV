angular.module('dqmv').controller('queryListCtrl', ['$scope','localDataService', function ($scope,localDataService) {

    //$scope.queries = localDataService.data.queries;

    localDataService.getData().then(function(data){
       console.log("from promise " + JSON.stringify(data));
       $scope.queries = data.queries;
    })

}]);

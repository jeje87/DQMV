angular.module('dqmv').controller('queryListCtrl', ['$scope','localDataService', function ($scope,localDataService) {

    $scope.queries = localDataService.data.queries;

    $scope.test = function() {
         console.log(JSON.stringify(localDataService.data.queries));
     $scope.queries = localDataService.data.queries;
    };

}]);

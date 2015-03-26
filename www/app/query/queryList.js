angular.module('dqmv').controller('queryListCtrl', ['$scope','localDataService', function ($scope,localDataService) {

    $scope.queries={};
    $scope.data = localDataService.data.queries;
    $scope.queries = localDataService.data.queries;


}]);

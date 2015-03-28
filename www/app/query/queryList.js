angular.module('dqmv').controller('queryListCtrl', ['$scope','localDataService', function ($scope,localDataService) {

    $scope.q="";

    localDataService.getData().then(function(data){
       $scope.queries = data.queries;
    })

}]);

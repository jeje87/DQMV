angular.module('dqmv').controller('queryListCtrl', ['$scope','localDataService', function ($scope,localDataService) {

    $scope.q="";

    $scope.selectQuery = function(id) {
        var query = localDataService.getQueryById(id);
    }

    $scope.$watch(function() {
             return localDataService.data;
        },
        function(newValue, oldValue) {
           if(newValue !== oldValue) {
                 $scope.queries = newValue.queries;
           }
    });



}]);

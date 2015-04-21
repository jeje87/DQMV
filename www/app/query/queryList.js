angular.module('dqmv').controller('queryListCtrl', ['$scope','localDataService', function ($scope,localDataService) {

    $scope.q="";
    $scope.queries = localDataService.data.queries;

    $scope.$watch(function() {
             return localDataService.data.queries;
        },
        function(newValue, oldValue) {
           if(newValue !== oldValue) {
                $scope.queries = newValue;
           }
    });

    $scope.selectQuery = function(id) {
       localDataService.getQueryById(id);
    }

}]);

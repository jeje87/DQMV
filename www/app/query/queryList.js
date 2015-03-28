angular.module('dqmv').controller('queryListCtrl', ['$scope','localDataService', function ($scope,localDataService) {

    $scope.test = function() {
         console.log(JSON.stringify(localDataService.data.queries));
     $scope.queries = localDataService.data.queries;
    };

    localDataService.getData().then(function(data){
       console.log("from promise " + JSON.stringify(data));
       $scope.queries = data.queries;
    })

}]);

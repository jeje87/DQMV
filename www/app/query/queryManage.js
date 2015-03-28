angular.module('dqmv')
.controller('queryManageCtrl', ['$scope','localDataService', function ($scope,localDataService) {

    $scope.test = function() {
       console.log(JSON.stringify(localDataService.data.queries));
    };
}]);

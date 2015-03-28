angular.module('dqmv')
.controller('queryManageCtrl', ['$scope','localDataService', function ($scope,localDataService) {

    $scope.clearCache = function() {
       localDataService.clearData().then(function () {
           alert("ok");
       });
    };
}]);

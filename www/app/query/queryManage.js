angular.module('dqmv')
.controller('queryManageCtrl', ['$scope','$state','$stateParams','$location','localDataService', function ($scope,$state,$stateParams,$location,localDataService) {

    $scope.query={};
    $scope.query.idQuery=$stateParams.id;

    $scope.clearCache = function() {
       localDataService.clearData();
    };


}]);

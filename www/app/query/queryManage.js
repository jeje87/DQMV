angular.module('dqmv')
    .controller('queryManageCtrl', ['$scope','$state','$stateParams','localDataService',
                function ($scope,$state,$stateParams,localDataService) {

    $scope.idQuery=$stateParams.id;

    $scope.clearCache = function() {
       localDataService.clearData();
    };

}]);

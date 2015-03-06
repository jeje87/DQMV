angular.module('dqmv')
.controller('queryViewCtrl', ['$scope','$stateParams', function ($scope,$stateParams) {

    $scope.idQuery=$stateParams.idQuery;

}]);

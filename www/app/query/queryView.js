angular.module('dqmv')
.controller('queryViewCtrl', ['$scope','$stateParams','apiConnector', function ($scope,$stateParams,apiConnector) {

    $scope.idQuery=$stateParams.id;
    $scope.data=[];
    $scope.label="Query " + $stateParams.id;

    apiConnector.getData().then(
            function(data) {

                $scope.data=data;
            }
        );



}]);

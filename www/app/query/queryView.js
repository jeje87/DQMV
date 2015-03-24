angular.module('dqmv')
.controller('queryViewCtrl', ['$scope','$stateParams','apiConnector', function ($scope,$stateParams,apiConnector) {

    $scope.idQuery=$stateParams.idQuery;
    $scope.data=[];

    apiConnector.getData().then(
            function(data) {

                $scope.data=data;
            }
        );



}]);

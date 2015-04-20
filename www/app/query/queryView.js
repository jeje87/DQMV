angular.module('dqmv')
.controller('queryViewCtrl', ['$scope','$stateParams','apiConnector','localDataService', function ($scope,$stateParams,apiConnector,localDataService) {

    $scope.data=[];

    $scope.$watch(function() {
             return localDataService.currentQuery;
        },
        function(newValue, oldValue) {
           if(newValue !== oldValue) {
                $scope.label=newValue.name;
                apiConnector.getData(newValue).then(
                    function(data) {
                        $scope.data=data;
                    }
                );
           }
    });


}]);

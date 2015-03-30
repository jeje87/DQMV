angular.module('dqmv')
.controller('queryViewCtrl', ['$scope','$stateParams','apiConnector','localDataService', function ($scope,$stateParams,apiConnector,localDataService) {

    $scope.idQuery=$stateParams.id;
    $scope.data=[];


    $scope.$watch('idQuery',
        function(newValue, oldValue){
            console.log('idQuery Changed');

            var query=localDataService.getQueryById($scope.idQuery);
                if(query) {
                    $scope.label=query.name;
                    debugger;
                    apiConnector.getData(query).then(
                        function(data) {
                            $scope.data=data;
                        }
                    );
                }
            }
    );







}]);

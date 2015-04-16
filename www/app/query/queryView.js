angular.module('dqmv')
.controller('queryViewCtrl', ['$scope','$stateParams','apiConnector','localDataService', function ($scope,$stateParams,apiConnector,localDataService) {

    $scope.idQuery=$stateParams.id;
    $scope.data=[];

    $scope.$watch('idQuery',function(newValue, oldValue){

        if(newValue !== "0") {
            query =localDataService.getQueryById($scope.idQuery);
        }
        else
        {
             query =localDataService.getFirstQuery();
        }

        if(query) {
                $scope.label=query.name;
                apiConnector.getData(query).then(
                    function(data) {
                        $scope.data=data;
                    }
                );
            }
        }
    );

}]);

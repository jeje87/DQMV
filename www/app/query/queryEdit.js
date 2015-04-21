angular.module('dqmv')
.controller('queryEditCtrl', ['$scope','$rootScope','$localForage','$stateParams','toaster','localDataService', function ($scope,$rootScope,$localForage,$stateParams,toaster,localDataService) {

    $scope.idQuery=$stateParams.id;
    $scope.query={name:"",url:"",id:0};

    $scope.query=localDataService.selectQueryById($scope.idQuery);

    $scope.$watch("idQuery", function(newValue, oldValue) {
           if (newValue =="-1") {
                $scope.query={name:"",url:"",id:0};
           }
           else if(newValue !== oldValue) {
                $scope.query=localDataService.selectQueryById($scope.idQuery);
           }
    });

    $scope.save = function() {

        var query = { "name": $scope.query.name, "url": $scope.query.url, "id":generateUUID() };

        localDataService.addQuery(query).then(
            function() {
                $scope.query.name ="";
                $scope.query.url ="";
                toaster.pop('success', "save", "OK");
            },
            function() {
                 toaster.pop('error', "save", "Error during save");
            }
        );

    }

    var generateUUID= function() {
        var d = new Date().getTime();
        var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            var r = (d + Math.random()*16)%16 | 0;
            d = Math.floor(d/16);
            return (c=='x' ? r : (r&0x3|0x8)).toString(16);
        });
        return uuid;
    };

}]);

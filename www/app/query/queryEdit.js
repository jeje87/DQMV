angular.module('dqmv')
.controller('queryEditCtrl', ['$scope','$rootScope','$localForage','toaster','localDataService', function ($scope,$rootScope,$localForage,toaster,localDataService) {


    $scope.query={name:"",url:"",id:0};

    $scope.save = function() {

        var query = { "name": $scope.query.name, "url": $scope.query.url, "id":generateUUID() };

        localDataService.addQuery(query).then(
            function() {
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

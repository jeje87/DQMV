angular.module('dqmv')
.controller('queryEditCtrl', ['$scope','$rootScope','$localForage','toaster','localDataService', function ($scope,$rootScope,$localForage,toaster,localDataService) {


    $scope.query={name:"",url:"",id:0};

    $scope.data = localDataService.data;

    $scope.save = function() {

        var query = { "name": $scope.query.name, "url": $scope.query.url, "id":generateUUID() };
        var data;

            if(!$scope.data )
                $scope.data ={"savedData":{"savedQuery" : []}};

        localDataService.data.queries.push(query);

            localDataService.saveData(function() {
                toaster.pop('success', "title", JSON.stringify(localDataService.data.queries));
            });


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

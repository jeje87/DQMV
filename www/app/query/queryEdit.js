angular.module('dqmv')
.controller('queryEditCtrl', ['$scope','$rootScope','$localForage','$stateParams','$state','$ionicViewSwitcher','toaster','localDataService','query',
                              function ($scope,$rootScope,$localForage,$stateParams,$state,$ionicViewSwitcher,toaster,localDataService,query) {

    $scope.idQuery=$stateParams.id;
    $scope.query=query;

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

    $scope.cancel = function() {

        //$ionicViewSwitcher.nextDirection('back');
        $state.go("main.view", {id: $scope.idQuery});

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

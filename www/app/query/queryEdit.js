angular.module('dqmv')
.controller('queryEditCtrl', ['$scope','$rootScope','$localForage','toaster','localDataService', function ($scope,$rootScope,$localForage,toaster,localDataService) {

    $scope.query={name:"",url:"",id:0};

    $scope.save = function() {

        var query = { "name": $scope.query.name, "url": $scope.query.url, id:0 };
        var data;

        localDataService.getData(function(data) {

            if(!data)
                data={"savedData":{"savedQuery" : []}};

            data.savedData.savedQuery.push(query);

            localDataService.setData(data,function() {
                toaster.pop('success', "title", JSON.stringify(data));
            });

        });

    }

}]);

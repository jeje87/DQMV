angular.module('dqmv')
.controller('queryEditCtrl', ['$scope','$rootScope','$localForage','toaster','localDataService', function ($scope,$rootScope,$localForage,toaster,localDataService) {

    $scope.query={name:"",url:"",id:0};

    $scope.data = localDataService.data;

    $scope.save = function() {

        var query = { "name": $scope.query.name, "url": $scope.query.url, id:0 };
        var data;



            if(!$scope.data )
                $scope.data ={"savedData":{"savedQuery" : []}};

            localDataService.data.queries.push(query);

            //localDataService.setData(data,function() {
            //    toaster.pop('success', "title", JSON.stringify(data));
            //});


    }

}]);

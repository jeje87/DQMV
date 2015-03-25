angular.module('dqmv')
.controller('queryEditCtrl', ['$scope','$localForage','toaster', function ($scope,$localForage,toaster) {

    $scope.query={name:"",url:""};

    $scope.save = function() {

        var query = { "name": $scope.query.name, "url": $scope.query.url };
        var data;

        $localForage.getItem('data').then(function(data) {
         //   debugger;
                if(data)
                {
                    data=JSON.parse(data);
                }
                else
                {
                    data={"savedData":{"savedQuery" : []}};
                }

            data.savedData.savedQuery.push(query);

                 $localForage.setItem('data',JSON.stringify(data)).then(function() {
                       toaster.pop('success', "title", JSON.stringify(data));
                });
            });


    }

}]);

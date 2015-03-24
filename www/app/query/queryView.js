angular.module('dqmv')
.controller('queryViewCtrl', ['$scope','$stateParams','apiConnector', function ($scope,$stateParams,apiConnector) {

    $scope.idQuery=$stateParams.idQuery;
    $scope.data=[];

    apiConnector.getData().then(
            function(data) {
                $scope.data=data;

                $scope.gLabels = toArray(data.DataFeed[0].Rows,"d_geo_country",10);
                $scope.gData = toArray(data.DataFeed[0].Rows,"m_visits",10);
            }
        );

    var toArray = function (obj,name,number) {
        if (obj==null)
            return [];
        var ret = Object.keys(obj).map(function (key) {
            return obj[key][name]
        });
        return ret;
    }

}]);

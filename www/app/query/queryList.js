angular.module('dqmv').controller('queryListCtrl', ['$scope','data', function ($scope,data) {

    $scope.q="";
    $scope.queries=data.queries;

}]);

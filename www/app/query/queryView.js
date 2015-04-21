angular.module('dqmv')
.controller('queryViewCtrl', ['$scope','$stateParams','$ionicActionSheet','apiConnector','localDataService', function ($scope,$stateParams,$ionicActionSheet,apiConnector,localDataService) {

    $scope.idQuery=$stateParams.id;
    $scope.data=[];

    $scope.$watch('idQuery',function(newValue, oldValue){

        if(newValue !== "0") {
            query =localDataService.selectQueryById($scope.idQuery);
        }
        else
        {
             query =localDataService.getFirstQuery();
        }

        alert(query);
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

     // Triggered on a button click, or some other target
    $scope.showMenu = function() {

       // Show the action sheet
       var hideSheet = $ionicActionSheet.show({
         buttons: [
           { text: 'Add' },
           { text: 'Edit' },
           { text: 'Copy' }
         ],
         destructiveText: 'Delete',
         cancelText: 'Cancel',
         cancel: function() {
              // add cancel code..
            },
         buttonClicked: function(index) {
             alert(index);
            return true;
         },
         destructiveButtonClicked : function() {
             alert("destructiveButtonClicked");
            return true;
         },
       });

       // For example's sake, hide the sheet after two seconds
       $timeout(function() {
         hideSheet();
       }, 2000);
    };



}]);

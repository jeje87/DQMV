angular.module('dqmv')
.controller('queryViewCtrl', ['$scope','$stateParams','$ionicActionSheet','$state','$timeout','$ionicViewSwitcher','localDataService','query',
                    function ($scope,$stateParams,$ionicActionSheet,$state,$timeout,$ionicViewSwitcher,localDataService,query) {

    $scope.idQuery=$stateParams.id;

    if($stateParams.id!=0) {
        $scope.label=query.name;
        localDataService.execQuery(query).then(
            function(data) {
                $scope.data=data;
            }
        );
    }

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

             if(index==0) {
                 $state.go("main.edit", {id: -1});
             }
             else if(index==1) {
                 //^.edit({ id: idQuery })
                 //$ionicViewSwitcher.nextDirection('back'); // 'forward', 'back', etc.
                 $state.go("main.edit", {id: $scope.idQuery});
             }
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
       }, 5000);
    };



}]);

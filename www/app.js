angular.module('ionicApp', ['ionic'])
  
 .controller('AppCtrl', ['$scope','$ionicActionSheet','$ionicSideMenuDelegate', function ($scope,$ionicActionSheet,$ionicSideMenuDelegate) {

     
     $scope.queries = [
          {label:'Query1'},
          {label:'Query2'},
          {label:'Query3'},
          {label:'Query4'},
          {label:'Query5'},
          {label:'Query6'},
          {label:'Query7'},
          {label:'Query8'},
        ];
     
     
      ionic.Platform.ready(function() {
        navigator.splashscreen.hide();
      });
    
      $scope.contacts = [];
     
     
      $scope.toggleLeft = function() {
        $ionicSideMenuDelegate.toggleLeft();
      };
     
 
     $scope.manage = function() {

       // Show the action sheet
       var hideSheet = $ionicActionSheet.show({
         buttons: [
           { text: 'Add Query' },
           { text: 'Edit this Query' }
         ],
         destructiveText: 'Delete this Query',
         titleText: 'Manage',
         cancelText: 'Cancel',
         cancel: function() {
              // add cancel code..
            },
         buttonClicked: function(index) {
           return true;
         }
       });

       // For example's sake, hide the sheet after two seconds
       $timeout(function() {
         hideSheet();
       }, 2000);

     };
     
      $scope.support = function() {
          alert('not implemented');
      };
     
     
      $scope.test = function test() {
          try
          {
              // specify contact search criteria
              var options = new ContactFindOptions();
              options.filter = "";
              options.multiple = true;
              //options.desiredFields = [];
              var fields = ["*"];

              // find contacts
              navigator.contacts.find(fields, function (contacts) {
                  
                  $scope.contacts = contacts;

              }, onError, options);
          }
          catch (err) {
              alert(err.message);
          }
      };

      function onSuccess(contacts) {
        
      }

      function onError() {
          alert('Error');
      }
 
 }]);



              
var app = angular.module('dqmv', ['ionic','ui.router','smart-table','chart.js','LocalForageModule','toaster']);

app.controller('homeCtrl',  ['$scope','$rootScope','localDataService', function($scope,$rootScope,localDataService)  {

    $scope.safeApply = function(fn) {
      var phase = this.$root.$$phase;
      if(phase == '$apply' || phase == '$digest') {
        if(fn && (typeof(fn) === 'function')) {
          fn();
        }
      } else {
        this.$apply(fn);
      }
    };

  ionic.Platform.ready(function() {
    //navigator.splashscreen.hide();
    //localDataService.getData();
  });

}]);

app.config(function($stateProvider, $urlRouterProvider) {

    $stateProvider
 // Set up a parent state, 'main', that will house the more complex template
   .state('main', {
      url: '/main',
      abstract: true,
      templateUrl: 'app/templates/side-menus.html',
    })

  .state('login', {
    url: '/login',
    templateUrl: 'app/templates/login.html',
    controller: 'loginCtrl'
  })

/*
 Set up a child state, 'main.home', which loads its views into the
ion-nav-views that are named and part of the templates/side-menus file. Note
that they each have their own controller and template URL as well. It's also
really important to note that this page will be accessed at
yourapp.com/#/main/home with this structure.
*/
    .state('main.view', {
      url:'/view/:id',
      views: {
        'left': {
          templateUrl: 'app/query/queryList.html',
          controller: 'queryListCtrl',
          resolve: {
              data: function(localDataService) {
                return localDataService.getData()
              }
            }
        },
        'right': {
          templateUrl: 'app/query/queryManage.html',
          controller: 'queryManageCtrl'
        },
        'main': {
          templateUrl: 'app/query/queryView.html',
          controller: 'queryViewCtrl',
          resolve: {
             query: function($stateParams, localDataService) {
                 if($stateParams.id!=0) {
                     return localDataService.getData().then(function() {
                          return localDataService.getQueryById($stateParams.id);
                     });
                }
                return null;
              }
            }
        }
      }
    })


  .state('main.edit', {
      url:'/edit/:id',
      views: {
        'main': {
          templateUrl: 'app/query/queryEdit.html',
          controller: 'queryEditCtrl',
          resolve: {
             query: function($stateParams, localDataService) {
                 if($stateParams.id!=0) {
                     return localDataService.getData().then(function() {
                          return localDataService.getQueryById($stateParams.id);
                     });
                }
                return null;
              }
            }
        }
      }
    })

//   .state('otherwise', {
//      url:'/main/:menuState',
//      views: {
//        'left': {
//          templateUrl: 'app/query/queryList.html',
//          controller: 'queryListCtrl'
//        },
//        'right': {
//          templateUrl: 'app/query/queryEdit.html',
//          controller: 'queryEditCtrl'
//        },
//        'main': {
//          templateUrl: 'app/query/query.html',
//          controller: 'queryCtrl'
//        }
//      }
//    });


 // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.when('', '/main/view/0');
});

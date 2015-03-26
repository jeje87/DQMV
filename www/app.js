var app = angular.module('dqmv', ['ionic','ui.router','smart-table','chart.js','LocalForageModule','toaster']);

app.controller('homeCtrl',  ['$scope','$rootScope','$localForage', function($scope,$rootScope,$localForage)  {

  ionic.Platform.ready(function($scope, $rootScope) {
    //navigator.splashscreen.hide();


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
      url:'/view',
      views: {
        'left': {
          templateUrl: 'app/query/queryList.html',
          controller: 'queryListCtrl'
        },
        'right': {
          templateUrl: 'app/query/queryManage.html',
          controller: 'queryManageCtrl'
        },
        'main': {
          templateUrl: 'app/query/queryView.html',
          controller: 'queryViewCtrl'
        }
      }
    })


  .state('main.edit', {
      url:'/edit',
      views: {
        'left': {
          templateUrl: 'app/query/queryList.html',
          controller: 'queryListCtrl'
        },
        'right': {
          templateUrl: 'app/query/queryManage.html',
          controller: 'queryManageCtrl'
        },
        'main': {
          templateUrl: 'app/query/queryEdit.html',
          controller: 'queryEditCtrl'
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
  $urlRouterProvider.when('', '/main/view');
});

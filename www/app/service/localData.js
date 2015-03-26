angular.module('dqmv').service('localDataService',['$localForage', function($localForage) {
    var self = this;
    self.getData = function(callback) {
         $localForage.getItem('data').then(function(data) {
                callback && callback(JSON.parse(data));
         });
    };
    self.setData = function(data,callback) {
         $localForage.setItem('data',JSON.stringify(data)).then(function() {
                callback && callback();
         });
    };
}]);

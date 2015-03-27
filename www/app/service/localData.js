angular.module('dqmv').service('localDataService',['$localForage', function($localForage) {

    var self = this;
    self.data={"queries":[]};

    self.getData = function(callback) {
         $localForage.getItem('data').then(function(data) {
             debugger;
             if(!data) {
                self.data={"queries":[]};
             }
             else {
                self.data={"queries":[]};
                var data = JSON.parse(data);
                data.queries.forEach(function(query) {
                    self.data.queries.push(query);
                });
             }


             callback && callback(self.data);
         });
    };

    self.saveData = function(callback) {
         $localForage.setItem('data',JSON.stringify(self.data)).then(function() {
                callback && callback();
         });
    };

     self.clearData = function(callback) {
         $localForage.clear().then(function() {
                callback && callback();
         });
     };



}]);

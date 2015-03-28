angular.module('dqmv').service('localDataService',['$localForage', function($localForage) {

    var self = this;
    self.data={"queries":[]};

    var newsPromise;

    this.getData = function(){
        if(!newsPromise){

            newsPromise = $localForage.getItem('data').then(function(data) {

                 var _data={"queries":[]};
                 if(data) {
                    _data = JSON.parse(data);

                 }
                 self.data = _data;
                return self.data;
            });
        }
        return newsPromise;
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

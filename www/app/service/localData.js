angular.module('dqmv').service('localDataService',['$localForage', function($localForage) {

    var self = this;
    self.data={"queries":[]};


    self.addQuery = function(query) {
        self.data.queries.push(query);
        return self.saveData(function() {
        });
    };


    this.getQueryById = function(id){
        var _query;
        self.data.queries.some(function(query) {
            if(query.id==id) {
                _query=query;
                return true;
            }
        });
        return _query;

    };

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
         return $localForage.setItem('data',JSON.stringify(self.data)).then(function() {
         });
    };

     self.clearData = function() {

        return $localForage.clear().then(function() {
            self.data.queries.length = 0;
        });
     };



}]);

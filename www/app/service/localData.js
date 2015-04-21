angular.module('dqmv').service('localDataService',['$localForage', function($localForage) {

    var self = this;
    self.data={"queries":[]};
    self.currentQuery={};


    self.addQuery = function(query) {
        self.data.queries.push(query);
        return self.saveData(function() {
        });
    };

    self.getCurrentQuery = function() {
      return self.currentQuery;
    }

    self.getData = function() {
      return self.data;
    }


    self.selectQueryById = function(id){
        var _query;
        self.data.queries.some(function(query) {
            if(query.id==id) {
                self.currentQuery=query;
                return true;
            }
        });
        return self.currentQuery;
    };

    self.getQueryById = function(id){
        var _query;
        self.data.queries.some(function(query) {
            if(query.id==id) {
                self.currentQuery=query;
                return true;
            }
        });
        return self.currentQuery;
    };

    this.getFirstQuery = function(){
        self.currentQuery=self.data.queries[0];
        return self.data.queries[0];
    };

     this.getLastQuery = function(){
        return self.data.queries[self.data.queries.length-1];
    };

    var newsPromise;
    self.getData = function(){

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

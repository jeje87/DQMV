angular.module('dqmv').service('localDataService',['$localForage', function($localForage) {

    var self = this;
    var newsPromise;
    self.data=null;
    self.currentQuery=null;


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

        if(!self.data)  {

            var query = self.getData().then(function() {
                 return self.getQueryById(id);
            });

        }
        else {
            self.data.queries.some(function(query) {
                if(query.id==id) {
                    self.currentQuery=query;
                    return true;
                }
            });
            return self.currentQuery;
        }
    };

    self.getFirstQuery = function(){
        self.currentQuery=self.data.queries[0];
        return self.data.queries[0];
    };

    self.getLastQuery = function(){
        return self.data.queries[self.data.queries.length-1];
    };


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

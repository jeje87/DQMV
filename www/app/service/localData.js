angular.module('dqmv').service('localDataService',['$localForage', function($localForage) {

    var self = this;
    self.data={"queries":[]};


    self.addQuery = function(query) {
        self.data.queries.push(query);
        self.saveData(function() {
            console.log(JSON.stringify(self.data.queries));
            //toaster.pop('success', "title", "OK");
        });
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
                callback && callback();
         });
    };

     self.clearData = function() {

        return $localForage.clear().then(function() {
            self.data={"queries":[]};
        });
     };



}]);

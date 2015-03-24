angular.module('dqmv').service('apiConnector', ['$http','$q',
    function($http,$q) {

        $http.defaults.headers.common.Authorization = 'Basic anBpcXVldEB4aXRpLmNvbTp3cWF6ZXI='

        var self = this;
        self.apiUrl = "https://apirest.atinternet-solutions.com/data/v2/json/getData?&columns={d_geo_country,m_visits}&sort={-m_visits}&space={s:429023}&period={R:{D:'-1'}}&max-results=10";

        self.getData = function() {

            var request = $http({
                method: "get",
                url: self.apiUrl,
                params: {
                }
            });


            return( request.then( self.handleSuccess, self.handleError ) );
        };


        // I transform the error response, unwrapping the application dta from
        // the API response payload.
        self.handleError = function(response) {

            // The API response from the server should be returned in a
            // normalized format. However, if the request was not handled by the
            // server (or what not handles properly - ex. server error), then we
            // may have to normalize it on our end, as best we can.
            if (
                ! angular.isObject( response.data ) ||
                ! response.data.message
                ) {

                return( $q.reject( "An unknown error occurred." ) );

            }

            // Otherwise, use expected error message.
            return( $q.reject( response.data.message ) );

        };


        // I transform the successful response, unwrapping the application data
        // from the API response payload.
        self.handleSuccess = function (response) {

            var ret = {};

            ret.rawData = response.data;
            ret.rowLabels = toArray(response.data.DataFeed[0].Rows,"d_geo_country");
            ret.rowValues = toArray(response.data.DataFeed[0].Rows,"m_visits");
            ret.columns = response.data.DataFeed[0].Columns;

            return ret;

        };

        var toArray = function (obj,name) {
            if (obj==null)
                return [];
            var ret = Object.keys(obj).map(function (key) {
                return obj[key][name]
            });
            return ret;
        }

    }
]);

angular.module('dqmv').service('apiConnector', ['$http','$q',
    function($http,$q) {

        $http.defaults.headers.common.Authorization = 'Basic anBpcXVldEB4aXRpLmNvbTp3cWF6ZXI='

        var self = this;
        self.apiUrl = "https://apirest.atinternet-solutions.com/data/v2/json/getData?&columns={d_geo_country,m_visits}&sort={-m_visits}&space={s:429023}&period={R:{D:'-1'}}&max-results=10";

        self.getData = function(query) {

            var request = $http({
                method: "get",
                url: query.url,
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

            //var response.data = JSON.Parse('"{"DataFeed":[{"Columns":[{"Name":"d_page","Label":"Pages","Category":"Dimension","Type":"String","CustomerType":"String"},{"Name":"m_page_views","Label":"Pages vues","Category":"Metric","Type":"Integer","CustomerType":"Integer","Summable":false}],"Rows":[{"d_page":"-","m_page_views":49275},{"d_page":"dashboards::main dashboard","m_page_views":48131},{"d_page":"Navigation::Pages::Pages","m_page_views":25266},{"d_page":"traffic sources::traffic sources::traffic sources","m_page_views":15395},{"d_page":"traffic::traffic::site summary","m_page_views":13611},{"d_page":"Navigation::Chapters::Chapters","m_page_views":12401},{"d_page":"navigation::pages::entry page","m_page_views":7793},{"d_page":"gegetest","m_page_views":7595},{"d_page":"publish::new report","m_page_views":7200},{"d_page":"traffic::site custom variables","m_page_views":6892},{"d_page":"dashboards::main dashboard","m_page_views":6319},{"d_page":"publish::report generation","m_page_views":5858},{"d_page":"Traffic::Overview","m_page_views":5683},{"d_page":"configuration::custom variables::home","m_page_views":5501},{"d_page":"technology::devices::devices","m_page_views":5384},{"d_page":"traffic::traffic::level 2 summary","m_page_views":5363},{"d_page":"Navigation::Overview","m_page_views":5276},{"d_page":"Usability::Clicks::Clicks","m_page_views":5028},{"d_page":"traffic::traffic::level 2 sites ","m_page_views":4747},{"d_page":"traffic sources::referrer sites::domains","m_page_views":4461}]}]}"');

            ret.rawData = response.data;
            ret.rowLabels = toArray(response.data.DataFeed[0].Rows,response.data.DataFeed[0].Columns[0].Name); //label sur la 1ere colonne
            ret.rowValues = toArray(response.data.DataFeed[0].Rows,response.data.DataFeed[0].Columns[1].Name);
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

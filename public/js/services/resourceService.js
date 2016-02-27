(function resourceServiceModule() {
    angular.module('conciergeApp')
        .factory('resourceFactory', resourceFactory);

    resourceFactory.$inject = ['$http', '$q'];
    function resourceFactory ($http, $q){
        return {
            addResource: function (params) {
                params = params || {};
                var deferred = $q.defer();
                $http.post('/api/category', params)
                    .success(function (data) {
                        deferred.resolve(data);
                    })
                    .error(function(err){
                        console.log('Error: '+ err);
                        deferred.reject(err);
                    });
                return deferred.promise;
            },
        }
    }
})();
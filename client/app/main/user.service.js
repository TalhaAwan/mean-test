(function () {
    angular.module('boilerplate').factory('userService', ['$http', function ($http) {
        return {
            create: function (obj, success, error) {
                $http.post('/api/ping/', obj).
                    success(function (data) {
                        success(data);
                    }).
                    error(function (err) {
                        error(err);
                    });
            },
            get: function (id, success, error) {
                $http.get('/api/user/' + id).
                    success(function (data) {
                        success(data);
                    }).
                    error(function (err) {
                        error(err);
                    });
            },
            getAll: function (success, error) {
                $http.get('/api/users').
                    success(function (data) {
                        success(data);
                    }).
                    error(function (err) {
                        error(err);
                    });
            },
            delete: function (id, success, error) {
                $http.delete('/api/delete' + id).
                    success(function (data) {
                        success(data);
                    }).
                    error(function (err) {
                        error(err);
                    });
            }
        };

    }]);
}
)();

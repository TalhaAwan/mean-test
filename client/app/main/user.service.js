(function () {
    angular.module('boilerplate').factory('userService', ['$http', function ($http) {
        return {
            create: function (obj, success, error) {
                $http.post('/api/ping/', obj, {}).
                    success(function (data) {
                        success(data);
                    }).
                    error(function (err) {
                        error(err);
                    });
            },
            update: function (obj, success, error) {
                $http.put('/api/update/', obj, {}).
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
            delete: function (user, success, error) {
                console.log(user)
                $http({
                    url: '/api/delete',
                    method: 'DELETE',
                    data: user,
                    headers: {
                        "Content-Type": "application/json;charset=utf-8"
                    }
                }
                ).then(function (data) {
                    success(data);
                }, function (err) {
                    error(err);
                })

            }
        };

    }]);
}
)();

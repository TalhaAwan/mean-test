(function () {
    angular.module('mainCtrl', []).controller('mainController', ['$scope', 'userService', function ($scope, userService) {
        userService.getAll(function (data) {
            console.log(data);
            $scope.users = data;
        }, function (err) {
            console.log(err)
        })
    }]);
})();
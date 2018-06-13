(function () {
    angular.module('mainCtrl', []).controller('mainController', ['$scope', 'userService', '$timeout', function ($scope, userService, $timeout) {
        $scope.user = {};
        userService.getAll(function (data) {
            console.log(data);
            $scope.users = data;
        }, function (err) {
            console.log(err)
        })
        $scope.ping = function () {
            console.log($scope.user);           
            userService.create($scope.user, function (data) {
                console.log(data)
                $scope.users.push(data);
                $scope.user = {}
            }, function (err) {
                console.log(err)
                $scope.pingErrorMsg = err.message || "something went wrong";
                $timeout(function () {
                    $scope.pingErrorMsg = ""
                }, 3000)
            })
        }

        $scope.update = function (user, index) {
            console.log(user);           
            userService.update(user, function (data) {
                console.log(data)
                $scope.users[index] = data
            }, function (err) {
                console.log(err)
                $scope.pingErrorMsg = err.message || "something went wrong";
                $timeout(function () {
                    $scope.pingErrorMsg = ""
                }, 3000)
            })
        }

        $scope.delete = function (id, index) {        
            userService.delete({id: id}, function () {
                $scope.users.splice(index,1);
            }, function (err) {
                console.log(err)
                $scope.pingErrorMsg = err.message || "something went wrong";
                $timeout(function () {
                    $scope.pingErrorMsg = ""
                }, 3000)
            })
        }
    }]);
})();
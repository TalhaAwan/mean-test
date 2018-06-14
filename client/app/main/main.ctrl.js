(function () {
    angular.module('mainCtrl', []).controller('mainController', ['$scope', 'userService', '$timeout', function ($scope, userService, $timeout) {
        $scope.user = {};
        userService.getAll(function (data) {            
            $scope.users = data;
        }, function (err) {
            console.log(err)
        })
        $scope.ping = function () {   
            $scope.user.disableBtn = true;       
            userService.create($scope.user, function (data) {
                $scope.users.push(data);
                $scope.user = {}
            }, function (err) {
                console.log(err)
                $scope.pingErrorMsg = err.message || "something went wrong";
                $scope.user.disableBtn = false; 
                $timeout(function () {
                    $scope.pingErrorMsg = ""
                }, 3000)
            })
        }

        $scope.update = function (user, index) {  
            user.disableBtn = true;        
            userService.update(user, function (data) {
                $scope.users[index] = data
            }, function (err) {
                console.log(err);
                user.disableBtn = false;
                $scope.pingErrorMsg = err.message || "something went wrong";
                $timeout(function () {
                    $scope.pingErrorMsg = ""
                }, 3000)
            })
        }

        $scope.delete = function (user, index) {  
            user.disableBtn = true;       
            userService.delete({id: user.id}, function () {
                $scope.users.splice(index,1);
            }, function (err) {
                console.log(err)
                user.disableBtn = false; 
                $scope.pingErrorMsg = err.message || "something went wrong";
                $timeout(function () {
                    $scope.pingErrorMsg = ""
                }, 3000)
            })
        }
    }]);
})();
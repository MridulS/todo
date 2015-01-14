var tlist = angular.module('tlist', []);
    
tlist.controller('addController', ['$scope', function($scope) {
    $scope.taskList = [];
    $scope.text = '';
    $scope.submit = function() {
        if ($scope.text) {
            $scope.taskList.push(this.text);
            $scope.text = '';
        }
    };
    $scope.remove = function(task) { 
        var index = $scope.taskList.indexOf(task)
        $scope.taskList.splice(index, 1);     
    }
}]);

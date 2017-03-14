angular.module('devEx');
devEx.controller('DirectoryController', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {
    $http.get('./js/lessons.json').then(function(data) {
        $scope.lessons = data.data;
    });
}]);

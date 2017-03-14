angular.module('devEx');
devEx.controller('LessonsController', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {
    $http.get('./js/lessons.json').then(function(data) {
        $scope.lessons = data.data;
        $scope.whichItem = $routeParams.itemId;
        $scope.whichLesson = $routeParams.lessonDiff;
    });
}]);

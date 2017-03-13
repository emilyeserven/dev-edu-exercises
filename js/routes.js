angular.module('devEx')
.config(function($routeProvider){
    $routeProvider
    .when('/', {
        templateUrl: './templates/home/index.html'
    })
    .when('/directory', {
        templateUrl: './templates/directory/index.html',
        controller: 'DirectoryController'
    })
    .when('/lessons/:itemId', {
        templateUrl: './templates/lessons/index.html',
        controller: 'LessonsController'
    })
    .when('/lessons/:itemId/:lessonDiff', {
        templateUrl: './templates/lessons/difficulty.html',
        controller: 'LessonsController'
    })
    .otherwise({
        redirectTo: '/directory'
    });
});

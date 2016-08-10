var app = angular.module('poochApp', ['ngRoute']);

app.controller('mainController', function($scope) {
  $scope.message = 'Hello from HomeController';
});

app.config(function ($routeProvider) {
    $routeProvider
            .when('/', {
                templateUrl: 'pages/home.html',
                controller: 'mainController'
            })
            .when('/about', {
                templateUrl: 'pages/about.html',
                controller: 'mainController'
            })            
            .when('/services', {
                templateUrl: 'pages/services.html',
                controller: 'mainController'
            })
            .when('/staff', {
                templateUrl: 'pages/staff.html',
                controller: 'mainController'
            })
            .when('/contact', {
                templateUrl: 'pages/contact.html',
                controller: 'mainController'
            })
            .when('/events', {
                templateUrl: 'http://www.events.miriamspoochella.html',
                controller: 'mainController'
            })
            .when('/home', {
                templateUrl: 'pages/home.html',
                controller: 'mainController'
            })            
            .otherwise({redirectTo: '/'});
            
});



'use strict';

/**
 * @ngdoc overview
 * @name newsApp
 * @description
 * # newsApp
 *
 * Main module of the application.
 */
angular
    .module('newsApp', [
        'ngAnimate',
        'ngCookies',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch',
        'ui.bootstrap'
    ])
    .constant('baseURL', 'http://localhost:8080/api/')
    .config(function ($routeProvider, $locationProvider) {
        $locationProvider.html5Mode(false);
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            })
            .when('/about', {
                templateUrl: 'views/site/about.html',
                controller: 'AboutCtrl',
                access: {
                    isFree: false
                }
            })
            .when('/:id', {
                templateUrl: 'views/article.html',
                controller: 'ArticleCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    });

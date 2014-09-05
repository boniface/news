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
    .constant('ZONE', 'ZM')
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
            .when('/news/:seo/:id', {
                templateUrl: 'views/article.html',
                controller: 'ArticleCtrl'
            })
            .when('/today', {
              templateUrl: 'views/today.html',
              controller: 'TodayCtrl'
            })
            .when('/yesterday', {
              templateUrl: 'views/yesterday.html',
              controller: 'YesterdayCtrl'
            })
            .when('/month', {
              templateUrl: 'views/month.html',
              controller: 'MonthCtrl'
            })
            .when('/custom/:start/to/:end', {
              templateUrl: 'views/custom.html',
              controller: 'CustomCtrl'
            })
            .when('/week', {
              templateUrl: 'views/week.html',
              controller: 'WeekCtrl'
            })
            .when('/customForm', {
              templateUrl: 'views/customform.html',
              controller: 'CustomformCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    });

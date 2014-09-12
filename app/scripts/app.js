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
        $locationProvider.hashPrefix('!');

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
            .when('/:seo/:id', {
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
            .when('/sitetoday/uri/:domain', {
              templateUrl: 'views/sitetoday.html',
              controller: 'SitetodayCtrl'
            })
            .when('/siteweek/uri/:domain', {
              templateUrl: 'views/siteweek.html',
              controller: 'SiteweekCtrl'
            })
            .when('/sitemonth/uri/:domain', {
              templateUrl: 'views/sitemonth.html',
              controller: 'SitemonthCtrl'
            })
            .when('/siteyesterday/uri/:domain', {
              templateUrl: 'views/siteyesterday.html',
              controller: 'SiteyesterdayCtrl'
            })
            .when('/sitecustom/uri/:domain/:start/to/:end', {
              templateUrl: 'views/sitecustom.html',
              controller: 'SitecustomCtrl'
            })
            .when('/site/url/:domain', {
              templateUrl: 'views/site.html',
              controller: 'SiteCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    });

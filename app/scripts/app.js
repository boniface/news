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
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
            access: {
                isFree: false
            }
      })
      .when('/hash/zones', {
        templateUrl: 'views/hashzones.html',
        controller: 'HashzonesCtrl'
      })
      .when('/hash/feeds', {
        templateUrl: 'views/hashfeeds.html',
        controller: 'HashfeedsCtrl'
      })
      .when('/hash/banners', {
        templateUrl: 'views/hashbanners.html',
        controller: 'HashbannersCtrl'
      })
      .when('/hash/users', {
        templateUrl: 'views/hashusers.html',
        controller: 'HashusersCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

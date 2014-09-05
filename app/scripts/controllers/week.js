'use strict';

/**
 * @ngdoc function
 * @name newsApp.controller:WeekCtrl
 * @description
 * # WeekCtrl
 * Controller of the newsApp
 */
angular.module('newsApp')
  .controller('WeekCtrl', function ($scope, $http, $location, $timeout, baseURL,ZONE) {

        var URL = baseURL + 'posts/date/'+ZONE+'/WEEK';
        $http.get(URL).success(function (data) {
            $scope.period='This Week\'s  News';
            $scope.news = data;
        });

        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
    });

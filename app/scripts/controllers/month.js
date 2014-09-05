'use strict';

/**
 * @ngdoc function
 * @name newsApp.controller:MonthCtrl
 * @description
 * # MonthCtrl
 * Controller of the newsApp
 */
angular.module('newsApp')
  .controller('MonthCtrl', function ($scope, $http, $location, $timeout, baseURL,ZONE) {

        var URL = baseURL + 'posts/date/'+ZONE+'/MONTH';

        $http.get(URL).success(function (data) {
            $scope.period='This Month\'s  News';
            $scope.news = data;

        });

        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
    });

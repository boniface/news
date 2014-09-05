'use strict';

/**
 * @ngdoc function
 * @name newsApp.controller:TodayCtrl
 * @description
 * # TodayCtrl
 * Controller of the newsApp
 */
angular.module('newsApp')
  .controller('TodayCtrl', function ($scope, $http, $location, $timeout, baseURL,ZONE) {
        var URL = baseURL + 'posts/date/'+ZONE+'/TODAY';
        $http.get(URL).success(function (data) {
            $scope.period='Today\'s  News';
            $scope.news = data;
        });

        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
    });

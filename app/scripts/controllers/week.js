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
            $scope.maxSize = 15;
            $scope.totalPosts =  $scope.news.length;
            $scope.currentPage = 1;

            $scope.paginate = function(value) {
                var begin, end, index;
                begin = ($scope.currentPage - 1) * $scope.maxSize;
                end = begin + $scope.maxSize;
                index = $scope.news.indexOf(value);
                return (begin <= index && index < end);
            };
        });

        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
    });

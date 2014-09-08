'use strict';

/**
 * @ngdoc function
 * @name newsApp.controller:SiteweekCtrl
 * @description
 * # SiteweekCtrl
 * Controller of the newsApp
 */
angular.module('newsApp')
  .controller('SiteweekCtrl', function ($scope, $http, $location, $timeout, baseURL,$routeParams,ZONE) {

        var domain=$routeParams.domain;
        var URL = baseURL + 'posts/site/'+ZONE+'/'+domain+'/WEEK';

        $http.get(URL).success(function (data) {
            $scope.period='This WEEK\'s  News';
            $scope.news = data;
            $scope.domain=domain;
            $scope.maxSize = 5;
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

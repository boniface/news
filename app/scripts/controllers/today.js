'use strict';

/**
 * @ngdoc function
 * @name newsApp.controller:TodayCtrl
 * @description
 * # TodayCtrl
 * Controller of the newsApp
 */
angular.module('newsApp')
  .controller('TodayCtrl', function ($scope, $http, $location, $timeout, baseURL,ZONE,Seo) {

        var URL = baseURL + 'posts/today/'+ZONE;
        $http.get(URL).success(function (data) {
            Seo.setTitle('Zambia Hash Lastest News Headlines From All Zambian Websites');
            Seo.setMetaDescription('Zambia Hash One Place For Latest News Headlines from All The Newspaper websites from Zambia');
            Seo.appendMetaKeywords('Zambia, News, Latest, Headline');
            $scope.period='Today\'s  News';
            $scope.news = data;
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

'use strict';

/**
 * @ngdoc function
 * @name newsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the newsApp
 */
angular.module('newsApp')
    .controller('MainCtrl', function ($scope, $http, baseURL,ZONE, Seo) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
        $scope.listPosts = function () {
            var url = baseURL + 'posts/' +ZONE;
            $http.get(url).success(function (data) {
                Seo.setTitle('Zambia Hash Lastest News Headlines From All Zambian Websites');
                Seo.setMetaDescription('Zambia Hash One Place For Latest News Headlines from All The Newspaper websites from Zambia');
                Seo.appendMetaKeywords('Zambia, News, Latest, Headline');

                $scope.posts = data;
                $scope.maxSize = 5;
                $scope.totalPosts =  $scope.posts.length;
                $scope.currentPage = 1;

                $scope.paginate = function(value) {
                    var begin, end, index;
                    begin = ($scope.currentPage - 1) * $scope.maxSize;
                    end = begin + $scope.maxSize;
                    index = $scope.posts.indexOf(value);
                    return (begin <= index && index < end);
                };
            });
        };
        $scope.listPosts();

    });

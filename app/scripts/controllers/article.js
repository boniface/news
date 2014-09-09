'use strict';

/**
 * @ngdoc function
 * @name newsApp.controller:ArticleCtrl
 * @description
 * # ArticleCtrl
 * Controller of the newsApp
 */
angular.module('newsApp')
    .controller('ArticleCtrl', function ($scope, $http, $location, $timeout, baseURL, $routeParams, ZONE,Seo) {
        var id = $routeParams.id;
        var URL = baseURL + 'post/'+ZONE+'/' + id;

        $http.get(URL).success(function (data) {
            Seo.setTitle(data.title);
            Seo.setMetaDescription(data.metaDescription);
            Seo.appendMetaKeywords(data.metakeywords);

            $scope.domain=data.domain;

            $scope.siteCode =data.siteCode;

            $scope.post = data;

        });

        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
    });

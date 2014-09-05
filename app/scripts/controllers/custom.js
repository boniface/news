'use strict';

/**
 * @ngdoc function
 * @name newsApp.controller:CustomCtrl
 * @description
 * # CustomCtrl
 * Controller of the newsApp
 */
angular.module('newsApp')
  .controller('CustomCtrl', function ($scope, $http, $location, $timeout, baseURL, $routeParams,ZONE) {
        var start = $routeParams.start;
        var end= $routeParams.end;
        var URL = baseURL + 'posts/date/'+ZONE+'/' +start+'/'+end;
        console.log(" DID YOU RECEIVE THESES ", start, end)
        $http.get(URL).success(function (data) {
            $scope.news = data;

        });
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
    });

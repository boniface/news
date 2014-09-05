'use strict';

/**
 * @ngdoc function
 * @name newsApp.controller:YesterdayCtrl
 * @description
 * # YesterdayCtrl
 * Controller of the newsApp
 */
angular.module('newsApp')
  .controller('YesterdayCtrl',function ($scope, $http, $location, $timeout, baseURL,ZONE) {

        var URL = baseURL + 'posts/date/'+ZONE+'/YESTERDAY';

        $http.get(URL).success(function (data) {
            $scope.period='Yesterday\'s  News';
            $scope.news = data;
        });

        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
    });

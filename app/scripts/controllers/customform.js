'use strict';

/**
 * @ngdoc function
 * @name newsApp.controller:CustomformCtrl
 * @description
 * # CustomformCtrl
 * Controller of the newsApp
 */
angular.module('newsApp')
  .controller('CustomformCtrl',  function ($scope, $http, $location) {

        $scope.getNews = function(custom) {
            var start = custom.start;
            var end = custom.end;
            $location.path('/custom/'+start+'/to/'+end);
        };

        $scope.isUnchanged = function(custom) {
            return angular.equals(custom, $scope.master);
        };
        $scope.reset = function(){
            $scope.custom ={};
            $scope.customForm.$setPristine();
        };
        $scope.cancel = function(){
            $scope.custom ={};
            $scope.customForm.$setPristine();
            $location.path('/');
        };
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
    });

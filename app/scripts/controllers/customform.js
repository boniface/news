'use strict';

/**
 * @ngdoc function
 * @name newsApp.controller:CustomformCtrl
 * @description
 * # CustomformCtrl
 * Controller of the newsApp
 */
angular.module('newsApp')
  .controller('CustomformCtrl',  function ($scope, $http, $location,Seo) {

        $scope.getNews = function(custom) {
            Seo.setTitle('Zambia Hash Lastest News Headlines From All Zambian Websites');
            Seo.setMetaDescription('Zambia Hash One Place For Latest News Headlines from All The Newspaper websites from Zambia');
            Seo.appendMetaKeywords('Zambia, News, Latest, Headline');
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

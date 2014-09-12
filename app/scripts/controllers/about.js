'use strict';

/**
 * @ngdoc function
 * @name newsApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the newsApp
 */
angular.module('newsApp')
  .controller('AboutCtrl', function ($scope,Seo) {
        Seo.setTitle('Zambia Hash Lastest News Headlines From All Zambian Websites');
        Seo.setMetaDescription('Zambia Hash One Place For Latest News Headlines from All The Newspaper websites from Zambia');
        Seo.appendMetaKeywords('Zambia, News, Latest, Headline');
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

  });

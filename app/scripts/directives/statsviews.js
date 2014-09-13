'use strict';

/**
 * @ngdoc directive
 * @name newsApp.directive:statsViews
 * @description
 * # statsViews
 */
angular.module('newsApp')
  .directive('statsViews', function ($http, baseURL) {
        return {

            link: function (scope, element, attrs) {

                $http.get(baseURL+ 'stats/POST/' + attrs.statsViews).success(function(number){
                    if(number < 9000) {
                        element.text(number);
                    }else {
                        var si = ['K', 'M', 'G', 'T', 'P', 'H'];
                        var exp = Math.floor(Math.log(number) / Math.log(1000));
                        var result = number / Math.pow(1000, exp);
                        result = (result % 1 > (1 / Math.pow(1000, exp - 1))) ? result.toFixed(2) : result.toFixed(0);
                        element.text(result + si[exp - 1]);
                    }
                });
            }
        };
    });

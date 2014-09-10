'use strict';

/**
 * @ngdoc filter
 * @name newsApp.filter:hashtml
 * @function
 * @description
 * # hashtml
 * Filter in the newsApp.
 */
angular.module('newsApp')
    .filter('hashtml', function () {
        return function (text) {
            return text.replace(/\n/g, '<br/><br/>');
//            return text.replace(/^\s*|\s(?=\s)|\s*$/g, '');
        };
    });
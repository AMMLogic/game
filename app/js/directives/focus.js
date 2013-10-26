/**
 * Created by city on 10/26/13.
 */

angular.module('app').directive('focus', function($timeout) {
    return {
        link: function(scope, element) {
            element.focus();
        }
    };
})
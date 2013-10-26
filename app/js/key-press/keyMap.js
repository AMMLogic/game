angular.module('app').factory('KeyMap', function($window, $rootScope) {

    function KeyMap () {
        this.right = false;
        this.left = false;
        this.down = false;
        this.up = false;
        this.space = false;
    }

    return KeyMap;
});
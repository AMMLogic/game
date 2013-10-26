
angular.module('app').controller('KeyPressCtrl', function($scope, KeyMap) {

    var keyMap = $scope.gameEngine.keyMap;

    $scope.keypressCallbackLeft = function ($event) {
        keyMap.left = true;
        $event.preventDefault();
    };
    $scope.keypressCallbackUp = function ($event) {
        keyMap.up = true;
        $event.preventDefault();
    };
    $scope.keypressCallbackDown = function ($event) {
        keyMap.down = true;
        $event.preventDefault();
    };
    $scope.keypressCallbackRight = function ($event) {
        keyMap.right = true;
        $event.preventDefault();
    };
    $scope.keypressCallbackSpace = function ($event) {
        keyMap.space = true;
        $event.preventDefault();
    };

    $scope.keypressCallbackUpLeft = function ($event) {
        keyMap.left = false;
        $event.preventDefault();
    };
    $scope.keypressCallbackUpUp = function ($event) {
        keyMap.up = false;
        $event.preventDefault();
    };
    $scope.keypressCallbackUpDown = function ($event) {
        keyMap.down = false;
        $event.preventDefault();
    };
    $scope.keypressCallbackUpRight = function ($event) {
        keyMap.right = false;
        $event.preventDefault();
    };
    $scope.keypressCallbackUpSpace = function ($event) {
        keyMap.space = false;
        $event.preventDefault();
    }

});

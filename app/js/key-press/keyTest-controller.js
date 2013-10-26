
angular.module('app').controller('KeyPressCtrl', function($scope, KeyMap) {

    console.log('Max');

    var keyMap = $scope.gameEngine.keyMap;

    $scope.keypressCallbackLeft = function ($event) {
        console.log('left');
        keyMap.left = true;
        $event.preventDefault();
    };
    $scope.keypressCallbackUp = function ($event) {
        console.log('up');
        keyMap.up = true;
        $event.preventDefault();
    };
    $scope.keypressCallbackDown = function ($event) {
        console.log('right');
        keyMap.down = true;
        $event.preventDefault();
    };
    $scope.keypressCallbackRight = function ($event) {
        console.log('down');
        keyMap.right = true;
        $event.preventDefault();
    };
    $scope.keypressCallbackSpace = function ($event) {
        console.log('SPACE');
        keyMap.space = true;
        $event.preventDefault();
    };

    $scope.keypressCallbackUpLeft = function ($event) {
        console.log('leftUp');
        keyMap.left = false;
        $event.preventDefault();
    };
    $scope.keypressCallbackUpUp = function ($event) {
        console.log('upUp');
        keyMap.up = false;
        $event.preventDefault();
    };
    $scope.keypressCallbackUpDown = function ($event) {
        console.log('rightUp');
        keyMap.down = false;
        $event.preventDefault();
    };
    $scope.keypressCallbackUpRight = function ($event) {
        console.log('downUp');
        keyMap.right = false;
        $event.preventDefault();
    };
    $scope.keypressCallbackUpSpace = function ($event) {
        console.log('SPACEUp');
        keyMap.space = false;
        $event.preventDefault();
    }

});

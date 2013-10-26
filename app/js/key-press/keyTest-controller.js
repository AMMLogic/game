
angular.module('app').controller('KeyPressCtrl', function($scope, GameMap) {
    console.log('Max');

    $scope.keypressCallbackLeft = function ($event) {
        console.log('left');
        $event.preventDefault();
    };
    $scope.keypressCallbackUp = function ($event) {
        console.log('up');
        $event.preventDefault();
    };
    $scope.keypressCallbackDown = function ($event) {
        console.log('right');
        $event.preventDefault();
    };
    $scope.keypressCallbackRight = function ($event) {
        console.log('down');
        $event.preventDefault();
    };
    $scope.keypressCallbackSpace = function ($event) {
        console.log('SPACE');
        $event.preventDefault();
    };

});

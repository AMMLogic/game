/**
 * Created with WebStorm.
 * User: Masha
 * Date: 26.10.13
 * Time: 11:34
 */

angular.module('app').controller('MapCtrl', function($scope) {
    var map = $scope.gameEngine.gameMap;
    $scope.blockRows = map.getBlocks();
});

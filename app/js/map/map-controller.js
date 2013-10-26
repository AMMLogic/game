/**
 * Created with WebStorm.
 * User: Masha
 * Date: 26.10.13
 * Time: 11:34
 */

angular.module('app').controller('MapCtrl', function($scope, GameMap) {
    var map = new GameMap();
    $scope.blockRows = map.getMap();
});

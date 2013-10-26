/**
 * Created by city on 10/26/13.
 */

angular.module('app').factory('GameMap', function() {
    function GameMap() {
        this.map = [[{}], [{}]];
    }

    GameMap.prototype.getBlock = function(point) {

    };

    GameMap.prototype.getMap = function() {
        return this.map;
    };

    return GameMap;
});
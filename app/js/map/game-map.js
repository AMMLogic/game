/**
 * Created by city on 10/26/13.
 */

angular.module('app').factory('GameMap', function() {
    function GameMap() {
        this.blocks = [[{}], [{}]];
    }

    GameMap.prototype.getBlock = function(point) {

    };

    GameMap.prototype.getBlocks = function() {
        return this.blocks;
    };

    return GameMap;
});
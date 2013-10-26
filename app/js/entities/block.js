/**
 * Created by city on 10/26/13.
 */

angular.module('app').factory('Block', function() {

    function Block(point, isStone) {
        this.point = point;
        this.isStone = isStone;
    }

    Block.SIZE = 30;

    Block.prototype.canMoveThroughIt = function() {
        return !this.isStone;
    };

    return Block;
});
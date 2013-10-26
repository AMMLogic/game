/**
 * Created by city on 10/26/13.
 */

angular.module('app').factory('Entity', function(Point, Block) {

    function Entity(point) {
        if (!(point instanceof Point)) {
            throw new TypeError('not a point');
        }

        this.point = point;

        this.speed = new Point(0, 0);

        this.direction = Entity.DIRECTION.WEST;
    }

    Entity.SIZE = Block.SIZE;

    Entity.DIRECTION = {
        WEST: 0,
        EAST: 1,
        NORTH: 2,
        SOUTH: 3
    };

    Entity.prototype.changeSpeed = function(x, y) {
        this.speed.x = x;
        this.speed.y = y;
    }

    Entity.prototype.tick = function() {

    }

    return Entity;
});
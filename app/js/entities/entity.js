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
        WEST: 'west',
        EAST: 'east',
        NORTH: '',
        SOUTH: 'south'
    };

    Entity.prototype.changeSpeed = function(x, y) {
        if (x && y) {
            throw new Error('tank is moving in more than one direction');
        }

        if (x > 0) {
            this.direction = Entity.DIRECTION.EAST;
        }
        if (x < 0) {
            this.direction = Entity.DIRECTION.WEST;
        }
        if (y > 0) {
            this.direction = Entity.DIRECTION.SOUTH;
        }
        if (y < 0) {
            this.direction = Entity.DIRECTION.NORTH;
        }

        this.speed.x = x;
        this.speed.y = y;
    }

    Entity.prototype.tick = function() {

    }

    return Entity;
});
/**
 * Created by city on 10/26/13.
 */

angular.module('app').factory('Tank', function(Point, Block) {

    function Tank(point) {
        if (!(point instanceof Point)) {
            throw new TypeError('not a point');
        }

        this.point = point;

        this.speed = new Point(0, 1);
    }

    Tank.SIZE = Block.SIZE;

    Tank.prototype.changeSpeed = function(x, y) {
        this.speed.x = x;
        this.speed.y = y;
    }

    return Tank;
});
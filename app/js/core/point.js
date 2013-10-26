/**
 * Created by city on 10/26/13.
 */

angular.module('app').factory('Point', function() {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }

    Point.prototype.add = function(x, y) {
        return new Point(this.x + x, this.y + y);
    };

    Point.prototype.mul = function(value) {
        return new Point(this.x * value, this.y * value);
    };

    Point.prototype.div = function(value) {
        return new Point(this.x / value, this.y / value);
    };

    Point.prototype.equals = function(point) {
        return this.x === point.x && this.y === point.y;
    }

    return Point;
})
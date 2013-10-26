/**
 * Created by city on 10/26/13.
 */

angular.module('app').factory('Tank', function(Point) {

    function Tank(point) {
        if (!(point instanceof Point)) {
            throw new TypeError('not a point');
        }

        this.point = point;
    }

    return Tank;
});
/**
 * Created by city on 10/26/13.
 */

angular.module('app').factory('Point', function() {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }

    return Point;
})
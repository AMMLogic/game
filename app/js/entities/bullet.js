/**
 * Created with WebStorm.
 * User: Admin
 * Date: 26.10.13
 * Time: 13:39
 */

angular.module('app').factory('Bullet', function(Point) {
    function Bullet(point) {
        this.point = point;
        this.isHit = false;
    }

    Bullet.size = 5;

    Bullet.prototype.setIsHit = function(isHit) {
        this.isHit = isHit;
    };

    return Bullet;
});

/**
 * Created with WebStorm.
 * User: Admin
 * Date: 26.10.13
 * Time: 13:39
 */

angular.module('app').factory('Bullet', function(Point) {
    function Bullet(entity, speed) {
        this.entity = entity;
        this.entity.changeSpeed(speed.x, speed.y);
    }

    Bullet.SPEED = 5;

    return Bullet;
});

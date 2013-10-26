/**
 * Created by city on 10/26/13.
 */

angular.module('app').factory('CurrentTank', function(Entity, Bullet) {

    function CurrentTank(entity, keyMap) {
        if (!(entity instanceof Entity)) {
            throw new TypeError('not a tank');
        }

        this.entity = entity;

        this.keyMap = keyMap;

        this.entity.class = 'ourTank';
    }

    CurrentTank.prototype.fire = function() {
        var bulletOffset = new Point(Entity.SIZE / 2, Entity.SIZE / 2);
        var bulletSpeed = new Point(0, 0);

        var DIRECTION = this.entity.constructor.DIRECTION;

        if (this.entity.direction === DIRECTION.WEST) {
            bulletSpeed.x = -Bullet.SPEED;
        }
        if (this.entity.direction === DIRECTION.EAST) {
            bulletSpeed.x = Bullet.SPEED;
        }
        if (this.entity.direction === DIRECTION.NORTH) {
            bulletSpeed.y = -Bullet.SPEED;
        }
        if (this.entity.direction === DIRECTION.SOUTH) {
            bulletSpeed.y = Bullet.SPEED;
        }

        var bullet = new Bullet(new Entity(this.entity.point.add(bulletOffset)));

    };

    CurrentTank.prototype.tick = function() {
        this.updateSpeed();
    };

    CurrentTank.prototype.updateSpeed = function() {

        switch (this.keyMap.left +'|'+ this.keyMap.up +'|'+ this.keyMap.right +'|'+ this.keyMap.down) {
            case false +'|'+ false +'|'+ false +'|'+ false:
                this.entity.speed.x = 0;
                this.entity.speed.y = 0;
                break;
            case true +'|'+ false +'|'+ false +'|'+ false:
                this.entity.speed.x = -1;
                this.entity.speed.y = 0;
                break;
            case false +'|'+ true +'|'+ false +'|'+ false:
                this.entity.speed.x = 0;
                this.entity.speed.y = 1;
                break;
            case false +'|'+ false +'|'+ true +'|'+ false:
                this.entity.speed.x = 1;
                this.entity.speed.y = 0;
                break;
            case false +'|'+ false +'|'+ false +'|'+ true:
                this.entity.speed.x = 0;
                this.entity.speed.y = -1;
                break;


        }

    };

    return CurrentTank;
});
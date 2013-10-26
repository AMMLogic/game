/**
 * Created by city on 10/26/13.
 */

angular.module('app').factory('CurrentTank', function(Entity, Bullet, Point) {

    function CurrentTank(entity, keyMap, gameEngine) {
        if (!(entity instanceof Entity)) {
            throw new TypeError('not a tank');
        }

        this.entity = entity;

        this.keyMap = keyMap;

        this.entity.class = 'ourTank';

        this.gameEngine = gameEngine;

        this.tankLevel = 1;
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

        var entity = new Entity(this.entity.point.add(bulletOffset.x, bulletOffset.y));
        var bullet = new Bullet(entity, bulletSpeed);

        this.gameEngine.bullets.push(bullet);
    };

    CurrentTank.prototype.tick = function() {
        this.updateSpeed();
        if (this.keyMap.space) {
            this.fire();
            this.keyMap.space = false;
        }
    };

    CurrentTank.prototype.updateSpeed = function() {

        switch (this.keyMap.left +'|'+ this.keyMap.up +'|'+ this.keyMap.right +'|'+ this.keyMap.down) {
            case false +'|'+ false +'|'+ false +'|'+ false:
                this.entity.changeSpeed(0, 0);
                break;
            case true +'|'+ false +'|'+ false +'|'+ false:
                this.entity.changeSpeed(-1, 0);
                break;
            case false +'|'+ true +'|'+ false +'|'+ false:
                this.entity.changeSpeed(0, -1);
                break;
            case false +'|'+ false +'|'+ true +'|'+ false:
                this.entity.changeSpeed(0, 1);
                break;
            case false +'|'+ false +'|'+ false +'|'+ true:
                this.entity.changeSpeed(1, 0);
                break;
        }

    };

    return CurrentTank;
});
/**
 * Created by city on 10/26/13.
 */
angular.module('app').factory('AiTank', function(Entity) {

    function AiTank(entity) {
        if (!(entity instanceof Entity)) {
            throw new TypeError('not an entity');
        }

        this.entity = entity;

        this.entity.class = 'enemyTank';

        this.entity.state = {
            directionX: 0,
            directionY: 1,
            changeDirection: 60,
            moveLength: 60
        }
    }

    AiTank.prototype.tick = function() {
        if (this.entity.state.changeDirection > 0) {
            this.entity.changeSpeed(this.entity.state.directionX, this.entity.state.directionY);
            this.entity.state.changeDirection--;
        } else {
            this.changeState();
        }
    };

    AiTank.prototype.changeState = function() {
        this.entity.state.changeDirection = this.entity.state.moveLength;
        this.entity.state.directionY = -this.entity.state.directionY;
    }

    return AiTank;
});
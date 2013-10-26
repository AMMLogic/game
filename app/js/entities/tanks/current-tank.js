/**
 * Created by city on 10/26/13.
 */

angular.module('app').factory('CurrentTank', function(Entity) {

    function CurrentTank(entity, keyMap) {
        if (!(entity instanceof Entity)) {
            throw new TypeError('not a tank');
        }

        this.entity = entity;

        this.keyMap = keyMap;

        this.entity.class = 'ourTank';
    }

    CurrentTank.prototype.tick = function() {
        CurrentTank.prototype.updateSpeed();
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
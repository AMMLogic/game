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

    };

    return CurrentTank;
});
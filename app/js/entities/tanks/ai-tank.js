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
    }

    AiTank.prototype.tick = function() {

    };

    return AiTank;
});
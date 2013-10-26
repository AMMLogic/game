/**
 * Created by city on 10/26/13.
 */

angular.module('app').factory('Block', function() {

    function Block() {

    }

    Block.prototype.canMoveThoughIt = function() {
        return true;
    };

    return Block;
});
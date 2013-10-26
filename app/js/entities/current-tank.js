/**
 * Created by city on 10/26/13.
 */

angular.module('app').factory('CurrentTank', function(Tank) {

    function CurrentTank(tank) {
        if (!(tank instanceof Tank)) {
            throw new TypeError('not a tank');
        }

        this.tank = tank;
    }

    return CurrentTank;
});
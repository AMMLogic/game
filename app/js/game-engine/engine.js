/**
 * Created by city on 10/26/13.
 */

angular.module('app').factory('GameEngine', function(Tank, Point, $window, $rootScope) {

    function GameEngine(gameMap) {
        this.gameMap = gameMap;

        this.tanks = [];
        this.bullets = [];

        this.currentTank = null;

        this.intervalId = null;
    }

    GameEngine.TICK_INTERVAL = 34;

    GameEngine.prototype.init = function() {
        var self = this;

        this.currentTank = new Tank( new Point(0, 0) );
        this.tanks.push(this.currentTank);

        this.intervalId = $window.setInterval(function() {
            $rootScope.$apply(function() {
                self.tick();
            });
        }, GameEngine.TICK_INTERVAL);
    };

    GameEngine.prototype.tick = function() {
        var self = this;

        _.each(this.tanks, function(tank) {
            var newPoint = tank.point.add(tank.speed.x, tank.speed.y);

            tank.point.x = newPoint.x;
            tank.point.y = newPoint.y;
            return;

            if (!self.gameMap.getBlock(newPoint).canMoveThroughIt()) {
                return;
            }

            if (!self.gameMap.getBlock(newPoint.add(Tank.SIZE, 0)).canMoveThroughIt()) {
                return;
            }

            if (!self.gameMap.getBlock(newPoint.add(0, Tank.SIZE)).canMoveThroughIt()) {
                return;
            }

            if (!self.gameMap.getBlock(newPoint.add(Tank.SIZE, Tank.SIZE)).canMoveThroughIt()) {
                return;
            }

            tank.point.x = newPoint.x;
            tank.point.y = newPoint.y;
        });
    };

    return GameEngine;
})
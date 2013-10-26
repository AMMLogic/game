/**
 * Created by city on 10/26/13.
 */

angular.module('app').factory('GameEngine', function(Tank, Point) {

    function GameEngine(gameMap) {
        this.gameMap = gameMap;

        this.tanks = [];
        this.bullets = [];
    }

    GameEngine.prototype.init = function() {
        this.tanks.push(new Tank( new Point(0, 0) ));
    }git s

    return GameEngine;
})
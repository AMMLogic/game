/**
 * Created by city on 10/26/13.
 */

angular.module('app').factory('GameEngine', function() {

    function GameEngine(gameMap) {
        this.gameMap = gameMap;

        this.tanks = [];
        this.bullets = [];
    }

    GameEngine.prototype.init = function() {

    }

    return GameEngine;
})
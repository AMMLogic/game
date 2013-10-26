/**
 * Created by city on 10/26/13.
 */

angular.module('app').factory('GameEngine', function(CurrentTank, AiTank, Entity, Point, KeyMap, $window, $rootScope) {

    function GameEngine(gameMap) {
        this.gameMap = gameMap;

        this.tanks = [];
        this.bullets = [];

        this.currentTank = null;
        this.aiTanks = [];

        this.intervalId = null;

        this.keyMap = new KeyMap;

        this.tickObjects = [];
    }

    GameEngine.TICK_INTERVAL = 34;

    GameEngine.prototype.init = function() {
        var self = this;

        var entity;

        entity = new Entity( new Point(30, 90) );
        entity.changeSpeed(1, 0);

        this.currentTank = new CurrentTank(entity, this.keyMap, this);


        entity = new Entity( new Point(120, 90) );
        this.aiTanks.push(new AiTank(entity));
        entity = new Entity( new Point(150, 120) );
        this.aiTanks.push(new AiTank(entity));
        entity = new Entity( new Point(80, 90) );
        this.aiTanks.push(new AiTank(entity));


        this.tickObjects.push(this.currentTank);
        this.tanks.push(this.currentTank.entity);
        _.each(this.aiTanks, function(aiTank) {
            self.tickObjects.push(aiTank);
            self.tanks.push(aiTank.entity);
        });


        this.intervalId = $window.setInterval(function() {
            $rootScope.$apply(function() {
                self.tick();
            });
        }, GameEngine.TICK_INTERVAL);
    };

    GameEngine.prototype.tick = function() {
        var self = this;

        _.each(this.tanks, function(tank, tankIndex) {
            var newPoint = tank.point.add(tank.speed.x, tank.speed.y);

            if (newPoint.equals(tank.point)) {
                return;
            }

            if (self.isTankCollideWall(newPoint)) {
                return;
            }

            if (self.isTankCollideTank(newPoint, tankIndex)) {
                return;
            }

            if (self.isTankCollideTank(newPoint.add(Entity.SIZE - 1, 0), tankIndex)) {
                return;
            }

            if (self.isTankCollideTank(newPoint.add(0, Entity.SIZE - 1), tankIndex)) {
                return;
            }

            if (self.isTankCollideTank(newPoint.add(Entity.SIZE - 1, Entity.SIZE - 1), tankIndex)) {
                return;
            }

            tank.point.x = newPoint.x;
            tank.point.y = newPoint.y;
        });

        _.each(this.bullets, function(bullet, bulletIndex) {
            var entity = bullet.entity;
            var newPoint = entity.point.add(entity.speed.x, entity.speed.y);

            if (!self.gameMap.getBlock(newPoint).canMoveThroughIt()) {
                self.bullets.splice(bulletIndex, 1);
                return;
            }

            entity.point.x = newPoint.x;
            entity.point.y = newPoint.y;
        });

        _.each(this.tickObjects, function(obj) {
            obj.tick();
        })
    };

    GameEngine.prototype.isTankCollideWall = function(point) {
        if (!this.gameMap.getBlock(point).canMoveThroughIt()) {
            return true;
        }

        if (!this.gameMap.getBlock(point.add(Entity.SIZE - 1, 0)).canMoveThroughIt()) {
            return true;
        }

        if (!this.gameMap.getBlock(point.add(0, Entity.SIZE - 1)).canMoveThroughIt()) {
            return true;
        }

        if (!this.gameMap.getBlock(point.add(Entity.SIZE - 1, Entity.SIZE - 1)).canMoveThroughIt()) {
            return true;
        }

        return false;
    }

    GameEngine.prototype.isTankCollideTank = function(point, skipTankIndex) {
        var self = this;

        var result = false;

        _.each(self.tanks, function(tank, tankIndex) {
            if (tankIndex === skipTankIndex) {
                return;
            }

            var topLeft = tank.point;
            var bottomRight = tank.point.add(Entity.SIZE - 1, Entity.SIZE - 1);

            if (point.x < topLeft.x || point.y < topLeft.y || point.x > bottomRight.x || point.y > bottomRight.y) {
                return;
            }

            result = true;
        });

        return result;
    }

    return GameEngine;
})
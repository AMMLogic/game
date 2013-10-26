
angular.module('app', []).run(function(GameEngine, GameMap) {
    var map = new GameMap();

    var engine = new GameEngine(map);
    engine.init();
});
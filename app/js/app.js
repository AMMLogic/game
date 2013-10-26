
angular.module('app', []).run(function(GameEngine, GameMap, $rootScope) {
    var map = new GameMap();

    var engine = new GameEngine(map);
    engine.init();

    $rootScope.gameEngine = engine;
});
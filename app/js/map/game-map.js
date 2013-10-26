/**
 * Created by city on 10/26/13.
 */

angular.module('app').factory('GameMap', function(Block, Point) {
    function GameMap() {
        var n = parseInt(300/Block.SIZE, 10);
        var currentRow;

        this.blocks = [];

        for(var i = 0; i < n; i++) {
            currentRow = [];
            for(var j = 0; j < n; j++) {
                currentRow.push(new Block(new Point(i*Block.SIZE, j*Block.SIZE), GameMap.LEVEL1[i][j]));
            }
            this.blocks.push(currentRow);
        }
    }

    GameMap.LEVEL1 = [
        [true,,,,,,,,,true],
        [,,true,true,,,,,,true],
        [true,,,,,,,,,true],
        [true,,,,,,,,,true],
        [true,,,,,,,,,true],
        [true,,,,,,,,,true],
        [true,,,,,,,,,true],
        [true,,,,,,,,,true],
        [true,,,,,,,,,true],
        [true,,,,,,,,,true]
    ];

    GameMap.prototype.getBlock = function(point) {

    };

    GameMap.prototype.getBlocks = function() {
        return this.blocks;
    };

    return GameMap;
});
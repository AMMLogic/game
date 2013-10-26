/**
 * Created by city on 10/26/13.
 */

angular.module('app').controller('TanksCtrl', function($scope) {
    $scope.tanks = $scope.gameEngine.tanks;
});

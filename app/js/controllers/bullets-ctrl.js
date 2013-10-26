/**
 * Created by city on 10/26/13.
 */

angular.module('app').controller('BulletsCtrl', function($scope) {
    $scope.bullets = $scope.gameEngine.bullets;
});

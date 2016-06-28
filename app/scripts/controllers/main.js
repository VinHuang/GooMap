'use strict';

/**
 * @ngdoc function
 * @name gooMapApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the gooMapApp
 */
angular.module('gooMapApp')
    .controller('MainCtrl', function($scope, Map) {
        $scope.search = function() {
            Map.search($scope.searchPlace).then(
                function(res) {

                    Map.addMarker(res);
                }
            );
        }
        Map.init();
    });

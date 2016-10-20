/**
 * Created by cal on 19/10/2016.
 */
'use strict';

angular.module('robot.manager')



.controller('ApiConfigCtrl', ['$scope', 'ITLocalStorage', 'ApplicationService',
    function($scope,
             ITLocalStorage,
             ApplicationService){

        $scope.itlocalStorage= ITLocalStorage;

        // solution 2 : mis à dispo de application dans le scope
        //$scope.application = Application;
        $scope.applicationService= ApplicationService;


}]);
/**
 * Created by cal on 19/10/2016.
 */
'use strict';

angular.module('robot.manager')

//10.1.20.117:8081/fingers
.controller('HandCtrl', ['$scope', 'ITLocalStorage', 'Hand', 'Application', 'StepService', 'Step', 'RobotPlayerService',
    function($scope,
             ITLocalStorage,
             Hand,
             Application,
             StepService,
             Step,
             RobotPlayerService){


        // declare dans le scope permet d'acceder a la valeur/objet dans la vue (dans le HTML)

        $scope.itlocalStorage= ITLocalStorage;

        $scope.application= Application;

        if (!$scope.hand)
            $scope.hand =  new Hand();

        $scope.previousStep = new Step();
        $scope.currentStep = new Step($scope.previousStep);

        //RobotPlayerService.playHand($scope.currentStep.hand);
        $scope.robotPlayerService = RobotPlayerService;
        $scope.stepService = StepService;


}]);

var application = {
    API: {
        URL : ''
    },
    playlist:[
        {

        },
        {

        }
    ]
}
/**
 * Created by cal on 20/10/2016.
 */
'use strict';

angular.module('robot.manager')

    .factory('Step', ['Hand', function (Hand) {

        function Step(previousStep) {

            this.stepIndex = previousStep ? previousStep.stepIndex+1:0;

            this.hand = previousStep ? new Hand(previousStep.hand) : new Hand();
        }

        return function (previousStep) {
            return new Step(previousStep);
        }

    }])



// step => stepIndex + hand
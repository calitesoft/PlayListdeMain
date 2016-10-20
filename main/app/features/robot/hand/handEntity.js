/**
 * Created by cal on 19/10/2016.
 */
'use strict';

angular.module('robot.manager')

.factory('Hand', [function () {

    // on ne peut pas avoir 2 constructures
    /*function Hand()
    {
        this.thumb = 180;
        this.index = 180;
        this.major = 180;
        this.ringfinger = 180;
        this.auricular = 180;
    }*/

    function Hand(oldHand)
    {
        // angular.copy(source, dest) : pas besoin d'avoir le oldHand dans le constructeur
        if (oldHand)
        {
            this.thumb = oldHand.thumb;
            this.index = oldHand.index;
            this.major = oldHand.major;
            this.ringfinger = oldHand.ringfinger;
            this.auricular = oldHand.auricular;
        }
        else {
            this.thumb = 0;
            this.index = 180;
            this.major = 180;
            this.ringfinger = 180;
            this.auricular = 180;
        }
    }


    return function(oHand) {
        return new Hand(oHand);
    };
}]);
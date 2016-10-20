/**
 * Created by cal on 19/10/2016.
 */
'use strict';

angular.module('robot.manager')

.factory('Application', [function () {

    function Application() {
        this.API = {
            URL : ''
        };
        this.playlist = [];
    }

    // retour d'une nouvelle instance (plus propre que d'appeler directement le constructeur en direct
    return function () {
        return new Application();
    }

}])
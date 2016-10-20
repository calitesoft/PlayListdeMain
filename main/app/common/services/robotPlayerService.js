/**
 * Created by cal on 20/10/2016.
 */
'use strict';
angular.module('robot.manager')

.service('RobotPlayerService', ['Hand', 'ApplicationService', '$http',
    function(Hand,
             ApplicationService,
             $http) {

    function _playHand(hand) {
        console.log(hand);

        var appService = ApplicationService.load();

        var urlPlayList = appService.API.URL + '/fingers';

        angular.forEach(appService.playlist, function(step)
        {
            console.log('toot fdefezrze');
            var hand = step.hand;
            console.log(hand);
            setTimeout(function() {
                return $http({
                    method: 'GET',
                    url: urlPlayList,
                    params: hand
                })
            },1000)
        })

    }



    return  {
        playHand : _playHand
    }


}]);
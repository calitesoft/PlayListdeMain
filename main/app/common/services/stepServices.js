/**
 * Created by cal on 20/10/2016.
 */
'use strict';
angular.module('robot.manager')

    .service('StepService', ['Hand', 'ApplicationService', 'Step',
        function(Hand,
                 ApplicationService,
                 Step) {


            function _save(obj) {
                console.log ('start save playlsit');
                console.log (obj);
                if (obj)
                {

                    var myapp = ApplicationService.load();
                    if (myapp)
                        if (myapp.playlist.length > 0) {
                            console.log('myplaylist : '+myapp.playlist.length );
                            console.log (myapp.playlist);
                            var prevStep = myapp.playlist[myapp.playlist.length-1];
                            if (prevStep) {
                                var prevStepIndex = prevStep.stepIndex;
                                console.log(prevStep);
                                console.log('toto : ' + prevStepIndex);
                                obj.stepIndex = prevStepIndex + 1;
                            }
                        }

                    console.log (obj);
                    ApplicationService.pushInPlaylist(obj);
                }
            }


            // fonction publique
            return {
                save : _save
            }

        }]);
/**
 * Created by cal on 19/10/2016.
 */
'use strict';
angular.module('robot.manager')

.service('ApplicationService', ['ITLocalStorage', 'Application', 'Step',
        function(ITLocalStorage,
                 Application,
                 Step) {

        function _load() {
            var application = ITLocalStorage.load();
            return application ? application : new Application();

        }

        // solution 2: cette fonction n'est pas nécessaire
        function _save(obj) {
            console.log ('start save');

            var myapp = _load();
            if (obj)
            {
                myapp.API.URL = obj;
            }
            ITLocalStorage.save(myapp);
        }

        function _pushInPlaylist(obj)
        {
            var myapp = _load();
            if (obj)
            {
                myapp.playlist.push(obj);
            }
            ITLocalStorage.save(myapp);
        }

        // fonction publique
        return {
            load : _load,
            // solution 2:
            // save : ITLocalStorage.save
            save : _save,
            pushInPlaylist : _pushInPlaylist

        }

    }]);
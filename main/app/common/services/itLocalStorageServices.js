/**
 * Created by cal on 19/10/2016.
 */
'use strict';
angular.module('localStorage.services',[]);

angular.module('localStorage.services')
    .provider('ITLocalStorage', [function() {

        // apres le get, le "this" n'est plus pareil
        this.defaultKey = "IT_KEY";
        var self = this;


        this.$get = function() {

            function _save(obj) {
                if (obj)
                    localStorage.setItem(self.defaultKey, angular.toJson(obj));
            }

            function _load() {
                return angular.fromJson(localStorage.getItem(self.defaultKey));
            }


            return {
                save : _save,
                load : _load
            }
        }
    }]);
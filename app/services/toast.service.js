/**
 * Created by FAB3659 on 21-Mar-18.
 */
(function(){
    'use strict';
    angular.module('ArtistsDirectoryApp')
        .factory('ToastService', ToastService);

    ToastService.$inject = [
        '$mdToast'
    ];
    
    function ToastService($mdToast) {
        let defaultLocals = {text: 'New artist added'};

        return {
            show: show,
            toast: toast
        };

        function show(options) {
            let locals = angular.extend(defaultLocals, options);
            return $mdToast.showSimple(locals.text);
        }

        function toast(options) {
            let locals = angular.extend(defaultLocals, options);

            let toast = $mdToast.simple()
              .textContent('New artist added');

            return $mdToast.show(toast);
        }
    }
})();
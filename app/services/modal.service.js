/**
 * Created by FAB3659 on 20-Mar-18.
 */
(function (){
    'use strict';
    angular.module('ArtistsDirectoryApp')
        .factory('ModalService', ModalService);

    ModalService.$inject = [
        '$log',
        '$mdDialog'
    ];
    
    function ModalService($log, $mdDialog) {
        return {
            openModal: openModal
        };

        function openModal(options) {
            let defaultOptions = {
                templateUrl: '',
                controller: '',
                controllerAs: 'vm',
                parent: angular.element(document.body),
                clickOutsideToClose: true,
                fullscreen: false
            };
            let locals = angular.extend(defaultOptions, options);

            return $mdDialog.show(locals);
        }
    }
})();
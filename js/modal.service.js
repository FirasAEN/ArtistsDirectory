/**
 * Created by FAB3659 on 20-Mar-18.
 */
(function (){
    'use strict';
    angular.module('AddressBook')
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
                parent: angular.element(document.body),
                clickOutsideToClose: true,
                fullscreen: false
            };
            let locals = angular.extend(defaultOptions, options);
            $mdDialog.show(locals).then( () => $log.info("ok") , () => $log.error("Not Okay !") );
        }
    }
})();
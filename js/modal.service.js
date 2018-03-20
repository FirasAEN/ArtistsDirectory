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

        function openModal() {
            let options = {
                templateUrl: './js/new-artist-modal.html',
                controller: 'ModalController',
                parent: angular.element(document.body),
                clickOutsideToClose: true,
                fullscreen: false
            };
            $mdDialog.show(options).then( () => $log.info("ok") , () => $log.error("Not Okay !") );
        }
    }
})();
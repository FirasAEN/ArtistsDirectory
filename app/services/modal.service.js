/**
 * Created by FAB3659 on 20-Mar-18.
 */
(function (){
    'use strict';
    angular.module('ArtistsDirectoryApp')
        .factory('ModalService', ModalService);

    ModalService.$inject = [
        '$log',
        '$mdDialog',
        '$q'
    ];
    
    function ModalService($log, $mdDialog, $q) {
        let modalDataContent = {};

        return {
            openModal: openModal,
            accept: accept,
            cancel: cancel,
            set: setModalDataContent
        };

        function openModal(options) {
            let defaultOptions = {
                templateUrl: '',
                controller: '',
                controllerAs: 'vm',
                parent: angular.element(document.body),
                clickOutsideToClose: true,
                fullscreen: false,
                resolve: {modalData: getModalDataContent}
            };
            let locals = angular.extend(defaultOptions, options);

            return $mdDialog.show(locals);
        }

        function accept() {
            $mdDialog.hide();
        }

        function cancel() {
            $mdDialog.cancel();
        }

        function setModalDataContent(options){
            modalDataContent = angular.extend(modalDataContent, options);
        }

        function getModalDataContent() {
            let deferred = $q.defer();
            deferred.resolve(modalDataContent);
            return deferred.promise;
        }
    }
})();
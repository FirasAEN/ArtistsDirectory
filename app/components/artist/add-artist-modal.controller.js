/**
 * Created by FAB3659 on 20-Mar-18.
 */
(function(){
    'use strict';
    angular.module('AddressBook')
        .controller('ModalController', ModalController);

    ModalController.$inject = [
        '$sce',
        '$mdDialog'
    ];

    function ModalController($sce,
                             $mdDialog){
        var vm = this;
        vm.tooltip = $sce.trustAsHtml("tooltip");

        vm.accept = accept;
        vm.cancel = cancel;

        function accept(){
            $mdDialog.hide();
        }

        function cancel() {
            $mdDialog.cancel();
        }
    }
})();
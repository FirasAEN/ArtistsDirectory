/**
 * Created by FAB3659 on 20-Mar-18.
 */
(function(){
    'use strict';
    angular.module('addressBook')
        .controller('AddArtistModalController', ModalController);

    ModalController.$inject = [
        '$sce',
        'ModalService'
    ];

    function ModalController($sce,
                             ModalService){
        var vm = this;
        vm.tooltip = $sce.trustAsHtml("tooltip");

        vm.accept = ModalService.accept;
        vm.cancel = ModalService.cancel;

    }
})();
/**
 * Created by FAB3659 on 26-Mar-18.
 */
(function (){
    'use strict';

    var artist = {
        restrict: 'E',
        templateUrl: 'app/components/artist/artist.html',
        controller: ArtistController,
        controllerAs: 'vm',
        bindings: {
            data: '<',
            addressBook: '<'
        }
    };

    angular.module('addressBook')
        .component('artist', artist);

    ArtistController.$inject = [
        '$log',
        'ModalService'
    ];

    function ArtistController($log, ModalService) {
        var vm = this;

        vm.$onInit = onInit;
        vm.openArtistInfo = openArtistInfo;

        function onInit(){
            vm.artist = this.data;
            vm.addressBookView = this.addressBook;
        }

        function openArtistInfo(){
            ModalService.set({artist: vm.artist});
            ModalService.openModal({
                templateUrl: 'app/components/artist/artist-info-modal.html',
                controller: 'ArtistInfoController'
            })
        }
    }
})();
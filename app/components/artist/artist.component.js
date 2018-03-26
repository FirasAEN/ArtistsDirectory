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
            data: '<'
        }
    };

    angular.module('AddressBook')
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
        }

        function openArtistInfo(){
            ModalService.openModal({
                templateUrl: 'artist-info-modal.html',
                controller: 'ArtistInfoController'
            })
        }
    }
})();
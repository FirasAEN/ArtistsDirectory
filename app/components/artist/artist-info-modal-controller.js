/**
 * Created by FAB3659 on 26-Mar-18.
 */
(function (){
    'use strict';

    angular.module('AddressBook')
        .controller('ArtistInfoController', ArtistInfoController);

    ArtistInfoController.$inject = ['modalData'];

    function ArtistInfoController(modalData){
        var vm = this;

        onInit();

        function onInit() {
            vm.artist = modalData.artist;
        }
    }
})();
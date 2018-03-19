/**
 * Created by Firas on 11/14/2017.
 */
(function (){
    'use strict';

    angular.module('AddressBook')
        .controller('AddressBookController', AddressBookController);

    AddressBookController.$inject = ['$log', 'ArtistsService'];

    function AddressBookController($log, ArtistsService) {

        var vm = this;

        onInit();

        function onInit(){
            vm.orderParam = 'name';
            vm.search = '';
            vm.date = new Date();
        }

        vm.reverse = function () {
            if(vm.orderParam === 'name'){
                vm.orderParam = '-name';
            } else {
                vm.orderParam = 'name';
            }
        };

        vm.clearSearch = function () {
          vm.search = '';
        };

        ArtistsService.getArtists()
            .then(_onGetArtistsSuccess);

        function _onGetArtistsSuccess() {
            vm.artists = ArtistsService.getAll();
        }

    }
})();

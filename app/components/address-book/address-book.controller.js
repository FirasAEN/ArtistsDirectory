/**
 * Created by Firas on 11/14/2017.
 */
(function (){
    'use strict';

    angular.module('AddressBook')
        .controller('AddressBookController', AddressBookController);

    AddressBookController.$inject = [
        '$log',
        'ArtistsService',
        'ModalService',
        'ToastService'
    ];

    function AddressBookController(
        $log,
        ArtistsService,
        ModalService,
        ToastService
    ) {

        var vm = this;

        onInit();
        vm.reverse = reverse;
        vm.clearSearch = clearSearch;
        vm.addArtist = addArtist;

        function onInit(){
            vm.orderParam = 'name';
            vm.search = '';
            vm.date = new Date();
        }

        function reverse() {
            if(vm.orderParam === 'name'){
                vm.orderParam = '-name';
            } else {
                vm.orderParam = 'name';
            }
        }

        function clearSearch() {
          vm.search = '';
        }

        function addArtist(){
            let options = {
                templateUrl: 'app/components/artist/add-artist-modal.html',
                controller: 'ModalController',
            };
            ModalService.openModal(options)
                .then(_onSuccess, _onError);

            function _onSuccess() {
                $log.warn("success");
                ToastService.set({text: 'New artist added', style: 'md-capsule'});
                ToastService.toast();
            }
            function _onError() {
                $log.warn("error");
                ToastService.set({text: 'No artist added', style: 'md-capsule'});
                ToastService.toast();
            }
        }

        ArtistsService.getArtists()
            .then(_onGetArtistsSuccess);

        function _onGetArtistsSuccess() {
            vm.artists = ArtistsService.getAll();
        }

    }
})();

/**
 * Created by Firas on 11/14/2017.
 */
(function (){
    'use strict';

    angular.module('addressBook')
        .controller('AddressBookController', AddressBookController);

    AddressBookController.$inject = [
        '$scope',
        '$log',
        '$timeout',
        '$interval',
        'ArtistsService',
        'ModalService',
        'ToastService'
    ];

    function AddressBookController(
        $scope,
        $log,
        $timeout,
        $interval,
        ArtistsService,
        ModalService,
        ToastService
    ) {

        var vm = this;
        var icons = {open: 'menu', close: 'lock_outline'};

        onInit();
        onDestroy();

        vm.reverse = reverse;
        vm.clearSearch = clearSearch;
        vm.addArtist = addArtist;
        vm.isOpen = isOpen;
        vm.switchSideNav = switchSideNav;
        vm.addArtistFromSideNav = addArtistFromSideNav;
        vm.expandToolbar = expandToolbar;
        vm.shrinkToolbar = shrinkToolbar;

        function onInit(){
            vm.orderParam = 'name';
            vm.search = '';
            vm.open = false;
            vm.sideNavState = false;
            vm.show = true;
            vm.icon = icons.open;
            vm.input = '';
            // $interval(_display, 5000);
            ArtistsService.getArtists()
                .then(_onGetArtistsSuccess);
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

        function addArtistFromSideNav(){
            switchSideNav();
            addArtist();
        }

        function isOpen(){
            vm.open = !vm.open;
        }

        function switchSideNav(){
            vm.sideNavState = !vm.sideNavState;
        }

        function _onGetArtistsSuccess() {
            vm.artists = ArtistsService.getAll();
        }


        function _display(){
            if(vm.icon === icons.open){
                vm.icon = icons.close;
                $timeout(()=> {vm.show = !vm.show;}, 1000);
            }
            else if(vm.icon === icons.close){
                vm.show = !vm.show;
                $timeout(()=> {vm.icon = icons.open;}, 1000);
            }
        }

        function expandToolbar(){
            angular.element("#toolbarContainer")
                .addClass('md-fab-fixed-bottom-toolbar-visible');
        }

        function shrinkToolbar() {
            angular.element('#toolbarContainer').removeClass('md-fab-fixed-bottom-toolbar-visible');
        }


        function onDestroy(){
        }
    }
})();

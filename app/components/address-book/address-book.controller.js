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
        ArtistsService
    ) {

        var vm = this;

        onInit();
        onDestroy();

        vm.switchSideNav = switchSideNav;


        ////////////////////
        // initialisation
        ////////////////////

        function onInit(){
            vm.orderParam = 'name';
            vm.search = '';

            _initEvents();

            ArtistsService.getArtists()
                .then(_onGetArtistsSuccess);
        }


        ////////////////////
        // binded functions
        ////////////////////

        function switchSideNav(){
            $scope.$broadcast('switch-sidenav');
        }

        ////////////////////
        // private functions
        ////////////////////

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

        function _initEvents() {
            $scope.$on('clear-search', function(){
                vm.search = '';
                $log.debug('Search cleared');
            });

            $scope.$on('reverse-order', function(){
                $log.debug('Order reversed');
                if(vm.orderParam === 'name'){
                    vm.orderParam = '-name';
                } else {
                    vm.orderParam = 'name';
                }
            });
        }

        ////////////////////
        // destruction
        ////////////////////

        function onDestroy(){
        }
    }
})();

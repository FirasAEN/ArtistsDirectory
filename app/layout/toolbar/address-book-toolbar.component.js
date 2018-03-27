/**
 * Created by FAB3659 on 27-Mar-18.
 */
(function (){
    'use strict';

    var addressBookToolbar = {
        restrict: 'E',
        templateUrl: 'app/layout/toolbar/address-book-toolbar.html',
        controller: AddressBookToolbarController,
        controllerAs: 'vm',
        bindings: {

        }
    };

    angular.module('addressBook.layout')
        .component('addressBookToolbar', addressBookToolbar);

    AddressBookToolbarController.$inject = [
        '$log',
        '$scope',
        '$q',
        '$timeout',
        'ModalService',
        'ToastService'
    ];

    function AddressBookToolbarController($log,
                                          $scope,
                                          $q,
                                          $timeout,
                                          ModalService,
                                          ToastService){
        var vm = this;
        var icons = {open: 'menu', close: 'lock_outline'};

        vm.$onInit = onInit;
        vm.$onDestroy = onDestroy;

        vm.reverse = reverse;
        vm.clearSearch = clearSearch;
        vm.addArtist = addArtist;
        vm.isOpen = isOpen;
        vm.expandToolbar = expandToolbar;
        vm.shrinkToolbar = shrinkToolbar;


        function onInit() {
            vm.open = false;
            vm.icon = icons.open;

            _initEvents();
        }



        function reverse() {
            $log.debug('toolbar: order reversed');
           $scope.$emit('reverse-order');
        }

        function clearSearch() {
            $log.debug('toolbar: clear search');
            $scope.$emit('clear-search');
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

        function isOpen(){
            $log.debug(vm.open);
            _checkToolbarStatus().then(_onCloseSuccess);

            function _onCloseSuccess(){
                angular.element('#toolbarContainer')
                    .removeClass('md-fab-fixed-bottom-toolbar-visible');
            }
        }

        function expandToolbar(){
            angular.element("#toolbarContainer")
                .addClass('md-fab-fixed-bottom-toolbar-visible');
        }

        function shrinkToolbar() {
            isOpen();
        }

        function onDestroy(){

        }

        function _initEvents(){
            $scope.$on('add-artist', function(){
                $log.debug('Adding artists');
                addArtist();
            });
        }

        function _checkToolbarStatus(){
            var deferred = $q.defer();
            vm.open = !vm.open;
            $timeout(()=> {
                deferred.resolve();
            }, 1000);
            return deferred.promise;
        }

    }
})();
/**
 * Created by FAB3659 on 27-Mar-18.
 */
(function(){
    'use strict';

    var addressBookLeftNavbar = {
        restrict: 'E',
        templateUrl: 'app/layout/navigation-bar/left-nav-bar.html',
        controller: LeftNavigationBarController,
        controllerAs: 'vm'
    };

    angular.module('addressBook.layout')
            .component('addressBookNavbar', addressBookLeftNavbar);

    LeftNavigationBarController.$inject = [
        '$scope',
        '$rootScope',
        '$log',
        '$q',
        '$timeout',
        'ArtistUiService',
        'ToastService'
    ];

    function LeftNavigationBarController($scope,
                                         $rootScope,
                                         $log,
                                         $q,
                                         $timeout,
                                         ArtistUiService,
                                         ToastService){
        var vm = this;

        vm.$onInit = onInit;
        vm.$onDestroy = onDestroy;

        vm.switchSideNav = switchSideNav;
        vm.addArtistFromSideNav = addArtistFromSideNav;

        ////////////////////
        // initialisation
        ////////////////////

        function onInit(){
            vm.sideNavState = false;

            _initEvents();
        }

        ////////////////////
        // binded functions
        ////////////////////

        function addArtistFromSideNav(){
            switchSideNav().then(_onSwitchSideNavSuccess);

            function _onSwitchSideNavSuccess() {
                _addArtist();
            }
        }

        function switchSideNav(){
            var deferred = $q.defer();
            $timeout(()=>{
                $scope.$emit('switch-sidenav');
                deferred.resolve();
            });
            return deferred.promise;
        }


        ////////////////////
        // private functions
        ////////////////////
        function _initEvents(){
            $scope.$on('switch-sidenav', function () {
                vm.sideNavState = !vm.sideNavState;
                $log.debug('Side nav switched');
            });
        }

        function _addArtist(){
            let options = {
                templateUrl: 'app/components/artist/add-artist-modal.html',
                controller: 'AddArtistModalController',
            };
            ArtistUiService.addNewArtist(options)
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

        ////////////////////
        // destruction
        ////////////////////

        function onDestroy(){
            $log.debug('Side nav component is destroyed');
        }
    }
})();
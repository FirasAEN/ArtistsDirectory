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
        '$log'
    ];

    function LeftNavigationBarController($scope,
                                         $rootScope,
                                         $log){
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
            switchSideNav();
            $rootScope.$broadcast('add-artist');
        }

        function switchSideNav(){
            $scope.$emit('switch-sidenav');
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

        ////////////////////
        // destruction
        ////////////////////

        function onDestroy(){
            $log.debug('Side nav component is destroyed');
        }
    }
})();
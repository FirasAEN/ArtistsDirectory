/**
 * Created by FAB3659 on 21-Mar-18.
 */
(function(){
    'use strict';
    angular.module('AddressBook')
        .controller('AddressBookToasterController', AddressBookToasterController);

    AddressBookToasterController.$inject = [
        '$scope',
        '$element',
        'ToastService',
        'toaster'];

    function AddressBookToasterController($scope, $element, ToastService, toaster) {
        let vm = this;
        vm.text = toaster.text;
        vm.hide = closeToaster;

        onInit();
        onDestroy();

        function onInit(){
            // $element.addClass(vm.style);
            angular.element(_addClass);
        }

        function _addClass(){
            angular.element('#toasterContainer')
                .addClass('md-toaster-fixed-top-visible');

            // angular.element('#sideNavTrigger')
            //     .addClass('elevate');
        }

        function closeToaster(){
            ToastService.hide();
        }


        function onDestroy(){
            $scope.$on('$destroy', function(){
                // angular.element('#toasterContainer')
                //     .removeClass('md-toaster-fixed-top-visible');

                // angular.element('#sideNavTrigger')
                //     .removeClass('elevate');
            });
        }
    }
})();
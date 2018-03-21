/**
 * Created by FAB3659 on 21-Mar-18.
 */
(function(){
    'use strict';
    angular.module('AddressBook')
        .controller('AddressBookToasterController', AddressBookToasterController);

    AddressBookToasterController.$inject = [
        '$element',
        'ToastService',
        'toaster'];

    function AddressBookToasterController($element, ToastService, toaster) {
        let vm = this;
        vm.text = toaster.text;
        vm.hide = closeToaster;

        init();
        function init(){
            // $element.addClass(vm.style);
            // angular.element(_addClass);
        }

        function _addClass(){
            angular.element('#addressBookToaster')
                .addClass(vm.style);
        }

        function closeToaster(){
            ToastService.hide();
        }
    }
})();
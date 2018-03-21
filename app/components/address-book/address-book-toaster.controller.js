/**
 * Created by FAB3659 on 21-Mar-18.
 */
(function(){
    'use strict';
    angular.module('AddressBook')
        .controller('AddressBookToasterController', AddressBookToasterController);

    AddressBookToasterController.$inject = ['toastContent'];

    function AddressBookToasterController(toastContent) {
        let vm = this;
        vm.toast = toastContent;

        init();
        function init(){
        }
    }
})();
/**
 * Created by FAB3659 on 21-Mar-18.
 */
(function(){
    'use strict';
    angular.module('ArtistsDirectoryApp')
        .factory('ToastService', ToastService);

    ToastService.$inject = [
        '$mdToast'
    ];
    
    function ToastService($mdToast) {

        return {
            show: show,
            toast: toast
        };

        function show(options) {
            let defaultLocals = {text: 'New artist added'};
            let locals = angular.extend(defaultLocals, options);
            return $mdToast.showSimple(locals.text);
        }

        function toast(options) {
            let defaultLocals = {
                templateUrl: 'app/components/address-book/address-book-toaster.html',
                controller: 'AddressBookToasterController',
                controllerAs: 'vm',
                parent: angular.element('#addressBookContainer')[0],
                position: 'top right',
                locals: {toastContent: 'I am generic toast'}
            };

            options = _setToasterLocals(options);
            let locals = angular.extend(defaultLocals, options);
            return $mdToast.show(locals);
        }

        function getContent() {
            return toastContent;
        }

        function _setToasterLocals(options){
            let locals = {};
            angular.forEach(options, (elem) => {
                if(elem === 'toastContent'){
                    locals[elem] = options.elem;
                }
            });
            options = angular.extend(options, locals);
            return options;
        }
    }
})();
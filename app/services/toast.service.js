/**
 * Created by FAB3659 on 21-Mar-18.
 */
(function(){
    'use strict';
    angular.module('ArtistsDirectoryApp')
        .factory('ToastService', ToastService);

    ToastService.$inject = [
        '$q',
        '$log',
        '$mdToast'
    ];
    
    function ToastService($q, $log, $mdToast) {
        let toasterDataContent = {};

        return {
            show: show,
            toast: toast,
            set: setToasterDataContent,
            hide: hide
        };

        function show(options) {
            let defaultLocals = {text: 'New artist added'};
            let locals = angular.extend(defaultLocals, options);
            return $mdToast.showSimple(locals.text);
        }

        function toast(options) {
            /**
             * resolve key (holds an object) contained in the 'defaultLocals' object
             * will be used by $mdToast service to inject the defined keys (toaster for this case) in the toaster's controller
             * more robust solution in case the options object contains a new definition
             * for the templateUrl and the corresponding controller
             * No naming convention is required. Keys used in the passed object when
             * using the set method will be available in the toaster controller
             */
            let defaultLocals = {
                locals: {},
                templateUrl: 'app/components/address-book/address-book-toaster.html',
                controller: 'AddressBookToasterController',
                controllerAs: 'vm',
                parent: angular.element('#toasterContainer')[0],
                position: 'top right',
                hideDelay: 5000,
                resolve: {toaster: getToasterDataContent}
            };

            let locals = angular.extend(defaultLocals, options);
            return $mdToast.show(locals);
        }

        function getToasterDataContent() {
            let deferred  = $q.defer();
            deferred.resolve(toasterDataContent);
            return deferred.promise;
        }

        function setToasterDataContent(obj) {
            toasterDataContent = angular.extend(toasterDataContent, obj);
        }

        /**
         * Good solution if the user uses the default templateUrl.
         * if a new definition of the template and the controller is provided,
         * values will be injected in the controller to be used  otherwise checking
         * is required prior to extending 'locals' object, therefore a naming convention
         * must be used to prevent modifying this service (not a long term solution)
         *
         * If default template is used :
         * must be used prior to extending the default locals
         *             options = _setToasterLocals(options);
         * wraps options object's keys in a new object called 'locals'
         * 'locals' object will be used by the $mdToast service to inject
         * contained keys into the toaster controller
         * keys present in the 'options' object must be injected manually
         * in the controller to be available
         */
        function _setToasterLocals(options){
            let locals = {};
            angular.forEach(options, (elem) => {
                locals[elem] = options.elem;
                delete options.elem;
            });
            options = angular.extend(options, locals);
            return options;
        }

        function hide(){
            $mdToast.hide();
        }
    }
})();
/**
 * Created by FAB3659 on 15-Mar-18.
 */
(function(){
    'use strict';

    angular.module('ArtistsDirectoryApp')
        .config(AppConfig);

    AppConfig.$inject = ['$routeProvider'];

    function AppConfig($routeProvider){
        $routeProvider.when('/address-book', {
            templateUrl: 'address-book.html',
            controller: 'AddressBookController',
            controllerAs: 'vm'
        })
        .otherwise({
            templateUrl: '404.html'
        });
    }
})();
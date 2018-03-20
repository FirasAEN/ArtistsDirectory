/**
 * Created by Firas on 11/14/2017.
 */
(function () {
    'use strict';
    angular.module('AddressBook')
        .factory('ArtistsService', ArtistsService);

    ArtistsService.$inject = ['$http', '$log'];

    function ArtistsService($http, $log) {
        var artists = null;

        return {
            getAll: getAll,
            getArtists: getArtists
        };

        function getArtists() {
           return  $http.get('./assets/data.json')
                .then(_onGetSuccess, _onGetFailure);

            function _onGetSuccess(response) {
                $log.info("success");
                artists = response.data;
            }

            function _onGetFailure() {
                $log.info("failed");
            }
        }


        function getAll() {
            return artists;
        }

    }

})();

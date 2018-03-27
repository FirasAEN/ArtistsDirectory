/**
 * Created by FAB3659 on 27-Mar-18.
 */
(function(){
    'use strict';

    angular.module('addressBook')
        .factory('ArtistUiService', ArtistUiService);

    ArtistUiService.$inject = [
        'ModalService'
    ];

    function ArtistUiService(ModalService){
        return {
            addNewArtist:addNewArtist
        };


        function addNewArtist(options) {
            return ModalService.openModal(options);
        }
    }
})();
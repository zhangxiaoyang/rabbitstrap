/**
 * Created by dq on 16/2/3.
 */
(function(){
    angular.module('rsApp').factory('UtilService',UtilService);

    UtilService.$inject = ['$rootScope'];

    function UtilService(){
        var service = {

            reverse:reverse,

        };

        return service;

        function reverse(str){
            return str.split('').reverse().join('');
        }

    }


})()
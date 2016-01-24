/**
 * @name: authentication service
 * @description: single responsibility of returning a firebase authentication object
 */

angular.module('psleApp')

    .factory('Auth', function ($firebaseAuth, FirebaseUrl) {
        
        var ref = new Firebase(FirebaseUrl);
        var auth = $firebaseAuth(ref);
    
        return auth;

    });
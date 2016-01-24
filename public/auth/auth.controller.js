/**
 * @name: authentication controller
 * @description: process the logic for authentication
 */

angular.module('psleApp')

    .controller('AuthCtrl', function (Auth, $state) {
        
        var authCtrl = this;
    
        authCtrl.user = {
            email: '',
            password: ''
        }
        
        
        /**
         * @name: login
         * @description: allows users to login to the application
         */
        
        
        authCtrl.login = function() {
            Auth.$authWithPassword(authCtrl.user)
                .then(function (auth) {
                    $state.go('home');
                }, function (error) {
                    authCtrl.error = error;
                });
        };
        
    
        /**
         * @name: register
         * @description: allows users to register an account using their email address
         */
    
    
        authCtrl.register = function() {
            Auth.$createUser(authCtrl.user)
                .then(function (user) {
                    authCtrl.login();
                }, function (error) {
                    authCtrl.error = error;
                });
        };
    
    
    });
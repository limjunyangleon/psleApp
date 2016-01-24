/**
 * @name: psleApp
 * @description: main module of the application
 */

angular.module('psleApp', [
    'firebase',
    'ui.router'
  ])
    .config(function ($stateProvider, $urlRouterProvider) {

        $stateProvider
            .state('login', {
                url: '/',
                controller: 'AuthCtrl as authCtrl',
                templateUrl: 'auth/login.html',
                resolve: {
                    requiredNoAuth: function($state, Auth) {
                        return Auth.$requireAuth().then(function (auth) {
                            $state.go('home');
                        }, function(error) {
                            return;
                        });
                    }
                }
            })
            .state('register', {
                url: '/register',
                controller: 'AuthCtrl as authCtrl',
                templateUrl: 'auth/register.html'
            })
            .state('home', {
                url: '/home',
                controller: 'HomeCtrl as homeCtrl',
                templateUrl: 'home/home.html'
            })
            .state('profile', {
                url: '/profile',
                controller: 'ProfileCtrl as profileCtrl',
                templateUrl: 'users/profile.html'
            });

        $urlRouterProvider.otherwise('/');

    })
    .constant('FirebaseUrl', 'https://psleapp.firebaseio.com/');
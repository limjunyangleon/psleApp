/**
 * @name: profile controller
 * @description: process the logic for profiling
 */

angular.module('psleApp')

    .controller('ProfileCtrl', function (Auth, $state, $http) {
        
        var profileCtrl = this;
    
        
        profileCtrl.listOfPrimaryYears = [
            'Primary 1',
            'Primary 2',
            'Primary 3',
            'Primary 4',
            'Primary 5',
            'Primary 6',
        ];
        
        profileCtrl.listOfGenders = [
            'Male',
            'Female'
        ]
        
    
        /**
         * @name: getListOfPrimarySchools
         * @description: get a list of all the primary schools in singapore
         */
    
    
        profileCtrl.getListOfPrimarySchools = function() {
         
            $http.get('https://data.gov.sg/api/action/datastore_search?resource_id=a618503b-7f7f-4e01-bade-1a108ca604f5')
                .then(function(result) {
                    profileCtrl.listOfPrimarySchools = result.data.result.records;
                }, function(error) {
                    console.log("Error getting list of primay schools");
                });
            
        }
        
        profileCtrl.getListOfPrimarySchools();
    
    
    });
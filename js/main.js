	angular.module('holiday', ['ngMaterial', 'ui.router'])
	    .controller('Hello', function($scope, $http) {
	        var year = 2015;
	        var key = 'dbdcda12-5054-471b-b952-c3277f2e953a';
	        $scope.holidaynames = [];


	        $http.get('https://holidayapi.com/v1/holidays?key=' + key + '&country=US&year=' + year).
	        then(function(response) {

	            $scope.holidays = response.data;
	            console.log($scope.holidays);

	            $scope.getDate = function(attrFromNgClick) {
	                $scope.holidaydate = attrFromNgClick;
	            }
	        });
	    })
	    .config(function($stateProvider, $urlRouterProvider) {
	        $stateProvider
	            .state('default', {
	                name: 'default',
	                url: '',
	                templateUrl: 'holidays.html'
	            })

	            .state('details', {
	                name: 'details',
	                url: '/details',
	                templateUrl: 'details.html'
	            })

	    });
/*
	    <!--
Test API Key:
9499c54a-1683-4464-b61e-bc368eb40ede
Test keys are unmetered and return dummy holiday day.

Live API Key:
dbdcda12-5054-471b-b952-c3277f2e953a
Limited to 500 calls per month, historical data only.
https://holidayapi.com/v1/holidays?key=9499c54a-1683-4464-b61e-bc368eb40ede&country=US&year=2015
-->*/
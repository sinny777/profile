/*
 * PRODUCTION CLIENT CONFIGURATION
 */

// API_URL: 'http://all-about-gurvinder.mybluemix.net/api'
// API_URL: 'http://localhost:3000/api'

define(['angular'], function (angular) {
	'use strict';

	return angular.module('app.config', [])
		.constant('CONFIG', {
			VERSION: '0.1',
			ENVIRONMENT: 'LOCAL',
			API_URL: '//all-about-gurvinder.mybluemix.net/api',
			IOT_CONFIG:{
				"org": "",
			    "id": "",
			    "authkey": "",
			    "authtoken": "",
			    "type": "shared",
			    "gatewayType": ""
			}
		});

});

/**
 * LOCAL Server Configuration
 */
'use strict';

module.exports.get = function() {
		return {
			"gatewayId": "000000001x2xx34y",
			"CLOUD_CONFIG": {
		      "org": "o6oosq",
		      "id": "a-o6oosq-9a4g8ir9qb",
		      "authkey": "a-o6oosq-9a4g8ir9qb",
		      "authtoken": "nennZR_hIm0t*58JvX",
		      "type": "shared"
		    },
		    "SERVICES_CONFIG":{
		    	"IOT_CONFIG":{
		    		"org": "o6oosq",
		    		"id": "a-o6oosq-gwvhfgityg",
				    "authkey": "a-o6oosq-gwvhfgityg",
				    "authtoken": "xwottObtqR@WHSe+q-",
				    "type": "shared"
		    	},
				"cloudantNOSQLDB":{
					  "username": "acb0bba8-0370-47c4-8e49-5ad1b1050873-bluemix",
					  "password": "5bfe2ecae5c815202c4d78db2600812ef5099f337a6deb6dba96ce0b7a5b0e13",
					  "host": "acb0bba8-0370-47c4-8e49-5ad1b1050873-bluemix.cloudant.com",
					  "port": 443,
					  "url": "https://acb0bba8-0370-47c4-8e49-5ad1b1050873-bluemix:5bfe2ecae5c815202c4d78db2600812ef5099f337a6deb6dba96ce0b7a5b0e13@acb0bba8-0370-47c4-8e49-5ad1b1050873-bluemix.cloudant.com"
				},
				"stt":{
					"url": "https://stream.watsonplatform.net/speech-to-text/api",
					"password": "C3PiNUqZbON0",
					"username": "cf2f73f4-72b9-4d1e-8695-da2c1cc350eb"
				},
				"conversation":{
					"credentials":{
						"url": "https://gateway.watsonplatform.net/conversation/api",
						"password": "5vr8NeNBQnli",
						"username": "2a071897-6991-47d4-87f2-fda6d2d9c021",
						"version_date": "2016-09-20",
						"version": "v1-experimental",
						"silent": true
					},
					"workspace_id": "54a0fc6a-45e2-42a6-a68d-b09cd6d99db5"
				},
				"alchemy": {
					  "url": "https://gateway-a.watsonplatform.net/calls",
					  "apikey": "90847a470740824a0fe97f42681e7c98285b7962"
				}
			}
		}
    	
};
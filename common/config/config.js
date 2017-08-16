/**
 * LOCAL Server Configuration
 */
'use strict';

module.exports.get = function() {
		return {
			"gatewayId": "000000001x2xx34y",
			"CLOUD_CONFIG": {
		      "org": "rqeofj",
		      "id": "a-rqeofj-i7nm1fdo5d",
		      "authkey": "a-rqeofj-i7nm1fdo5d",
		      "authtoken": "3X0bTD*8tf4Q1rq12n",
		      "type": "shared"
		    },
		    "SERVICES_CONFIG":{
		    	"IOT_CONFIG":{
		    		"org": "rqeofj",
				    "id": "a-rqeofj-i7nm1fdo5d",
				    "authkey": "a-rqeofj-i7nm1fdo5d",
				    "authtoken": "3X0bTD*8tf4Q1rq12n",
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
					"url": "https://stream.watsonplatform.net/text-to-speech/api",
					"password": "xGaXXN1sHQNE",
					"username": "d1ea6af9-ca33-43c6-a85d-572257ff6a64"
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
				}				
			}
		}
    	
};
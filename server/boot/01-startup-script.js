'use strict';

var log = require('debug')('boot:01-startup-script');

var Client = require('ibmiotf');
var chrono = require('chrono-node');
var request = require('request');

var appClient = {};

module.exports = function(app) {

	if (app.dataSources.db.name !== 'Memory' && !process.env.INITDB) {
		return;
	}

	var appConfig = require('../../common/config/config').get();
	// var deviceHandler = require('../../server/handlers/deviceHandler')(app);
	var commonHandler = require('../../server/handlers/commonHandler')();

//	initStartupLogic();

//	saveAndExecuteScenes();

//	testPushNotification();

//	testNLCDateParser();

//	testConversation();
//	testDeviceUpdate();

	function testConversation(){
		var Conversation = app.models.Conversation;
		var conversationReq = {"body":{
										"params": {"input": "Switch on the living room light"},
										"context": {}
									}
							  };

	  console.log("IN doConversation: >> ", JSON.stringify(conversationReq));
	  Conversation.doconversation(conversationReq,
					  function(err, resp) {
		  				if(err){
		  					console.log("ERROR IN doconversation: ", JSON.stringify(err));
		  				}
						console.log("CONVERSATION RESP: >> ", JSON.stringify(resp));
						if(resp && resp.conversationResp && resp.conversationResp.output){

						}
					  });
	};

	function testNLCDateParser(){
		printResults(chrono.parse('Please do the installation next Friday at 3pm'));
	};

	function printResults(results){
		console.log("\n\nRESULT: >>> ", results, "\n\n");
		if(results && results.length > 0){
			console.log("index: >>> ", results[0].index);
			console.log("results[0].text: >>> ", results[0].text);
			console.log("results[0].ref: >>> ", results[0].ref);
			if(results[0].start){
				console.log("StartDate: >>> ", results[0].start.date());
			}
			if(results[0].end){
				console.log("End Date: >>> ", results[0].end.date());
			}
		}
		console.log("\n\n------------------\n\n");
	}

};

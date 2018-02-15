'use strict';

var CONFIG = require('../../common/config/config').get();

module.exports = function(CommonTask) {

	var commonHandler = require('../../server/handlers/commonHandler')(CommonTask.app);

	CommonTask.remoteMethod('sendemail', {
		    	accepts: [
		            { arg: 'req', type: 'object', http: function(ctx) {
		              return ctx.req;
		            }
		          }],
		         http: {path: '/sendemail', verb: 'post'},
		         returns: {arg: 'resp', type: 'object'}
	});

	CommonTask.sendemail = function(req, cb) {
		console.log("\n\nIn CommonTask.sendemail : >>>> ", req.body);
		var reqPayload = req.body;
		console.log(reqPayload);
		commonHandler.sendEmail(reqPayload, function(err, resp){
      if(!err){
          console.log("Email Sent successfully: >>>> ", resp);
      }
			cb(err, resp);
		});
	  };

};

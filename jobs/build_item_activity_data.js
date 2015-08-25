#!/usr/local/bin/node

var db = require("../lib/db.js")
var util = require("../lib/util.js")


// var opts = {
//     logDirectory: __dirname + '/../log',
//     fileNamePattern: 'log-<date>.log',
//     dateFormat:'YYYY.MM.DD'
// };

// var log = require('simple-node-logger').createRollingFileLogger( opts );

// log.info('[update_sc_identifiers] Starting up script')


//see if this process is running already
util.checkIfRunning(function(isRunning){
	if (isRunning){
      	console.log("Already running ")
		log.info('[build_item_activity_data] Already running')
      	process.exit()
	}
})



var counter = 0, counterRecords = 0
var counterOclc = 0, counterIsbn = 0, counterIssn = 0


//update the log every 15min

// setInterval(function(){
// 	log.info('[update_sc_identifiers] Seeked: ', counter, ' Modified ', counterRecords , ' records. OCLC:',counterOclc," ISBN: ",counterIsbn, " ISSN: ", counterIssn)
// },300000)
	

db.allItemsReverse(function(item,cursor,mongoConnection){

	counter++


	if (counter > 500000){
		log.info('[build_item_activity_data] Done. Modified ', counterRecords , ' records. OCLC:',counterOclc," ISBN: ",counterIsbn, " ISSN: ", counterIssn)
		util.exit()
		mongoConnection.close()
	}


	// if (!cursor){
	// 	log.info('[update_sc_identifiers] Done. Modified ', counterRecords , ' records. OCLC:',counterOclc," ISBN: ",counterIsbn, " ISSN: ", counterIssn)
	// 	util.exit()
	// }

	console.log(item.status,item.bibIds, item.location)


	var updateRecord = { id : item.id }

	cursor.resume()

})




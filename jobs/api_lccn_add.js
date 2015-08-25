var db = require("../lib/db.js")
var apiLccn = require("../lib/apiLccn.js")
var async = require('async')


var log = require('simple-node-logger').createSimpleLogger(__dirname + '/../log/api_lccn_add.log');
var count = 0, addedDewey = 0, addedLcc = 0, addedOclc = 0;


setInterval(function(){
	log.info('Work Update. total: ', count, ' addedDewey:', addedDewey, ' addedLcc:', addedLcc, ' addedOclc:',addedOclc)
},300000)
	



var work = function(cb){



	db.returnNextApiLccnWork(function(err,doc){

		if (err) console.log(err)


		if (doc) doc = doc[0]


		log.info(doc['_id']," Started working on.")



		setTimeout(function(){


			apiLccn.returnLccnMarcXml(doc['lccn'],function(xml){


				apiLccn.parseMarcXml(xml,function(results){

					log.info(doc['_id'],results)

					var updateRecord = {
						id: doc['_id']
					}


					if (results.dewey) updateRecord['lc:dcc'] = results.dewey
					if (results.lcc) updateRecord['lc:lcc'] = results.lcc
					if (results.oclc) updateRecord['lc:oclc'] = results.oclc

					count++
					if (updateRecord['lc:dcc']) addedDewey++
					if (updateRecord['lc:lcc']) addedLcc++
					if (updateRecord['lc:oclc']) addedOclc++



					db.updateBibRecord(updateRecord,function(err,r){

						//we want to delete this record from the work table so the next work call gets the next one in line to work
						db.deleteApiLccnWork(doc['_id'],function(err,results){
							if (err) log.info(doc['_id']," Error:",err)
							work()
						})


					})




				});




			})





		},5000)



	})




}

work()
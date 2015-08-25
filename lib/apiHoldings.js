var config = require("config")
var request = require('request');
var fs = require('fs')
var async = require('async')

var exports = module.exports = {}


exports.checkOclcHoldingsTwoPagesForNYPL = function(oclcNumber,location,cb){



	async.series({
		one: function(callback){
				
			exports.checkOclcHoldings(oclcNumber,location,'1',function(results){

				callback(null,results.search('New York Public Library System'))
			})


		},
		two: function(callback){

			exports.checkOclcHoldings(oclcNumber,location,'7',function(results){

				callback(null,results.search('New York Public Library System'))
			})


		}
	},
	function(err, results) {


		if (results.one > -1 || results.two > -1){
			results.all = true
		}else{
			results.all = false
		}


		cb(results)

	})



}



exports.checkOclcHoldings = function(oclcNumber,location,page,cb){


	var url = 'http://www.worldcat.org/wcpa/servlet/org.oclc.lac.ui.ajax.ServiceServlet?wcoclcnum={oclcNumber}&loc={location}&start_holding={page}&serviceCommand=holdingsdata'

	url = url.replace('{oclcNumber}',oclcNumber).replace('{location}',location).replace('{page}',page)



	request.get({ url : url, headers: {
    	
    	'Accept'    : 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
    	'User-Agent': 'request'
  	}},

	function (error, response, body) {



		var results = (body) ? body : ""

		cb(results)


    
    })




}


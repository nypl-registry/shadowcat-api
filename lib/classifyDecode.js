var parseString = require('xml2js').parseString
var async = require('async')
require("string_score")



var exports = module.exports = {};

// classify response codes
// 0:	Success. Single-work summary response provided.
// 2:	Success. Single-work detail response provided.
// 4:	Success. Multi-work response provided.
// 100:	No input. The method requires an input argument.
// 101:	Invalid input. The standard number argument is invalid.
// 102:	Not found. No data found for the input argument.
// 200:	Unexpected error.



//the various logic if we should use data from a classify result or not
exports.returnData = function(record,cb){


	//all possible actions

	var action = { addOclcNumberOnly: false, addClassifyData : false, failure: false, possibleOclcNumberOnly: false, data : null  }



	//lets process all of the xml responses first
	async.map(record.results, exports.processXML, function(err, results){
		

		//means we likely found an exact match based on an identifier
		if (record.foundSomething){


			if (record.resultsLength == 1){

				action.addClassifyData=true
				action.data = results[0]

				cb(action)
				return false

			}else if (record.resultsLength > 1){


				//find the 2 response
				for (var x in results){

					if (results[x].response == 2){
						action.addClassifyData=true
						action.data = results[x]
					}


				}

				if (!action.addClassifyData){
					console.log("Error here")
					console.log(record)
				}
				

				cb(action)
				return false

			}else{


			}






		//no exact match, likely multiple matches
		}else{


			//if it has a OCLC number then just stop, we can get some data from OCLC LD services
			if (record.oclc.length > 0 ){
				action.failure=true
				cb(action)
				return false
			}


			var foundSomething = false

			//lets make sure we really did not find anything
			for (var x in results){
				if (results[x].response == 2 || results[x].response == 4) foundSomething = true
			}

			if (foundSomething){

				//look to see if we found a multiwork response that has a indetifier match
				for (var x in results){

					if (results[x].response == 4){


						if (results[x].inputType=='isbn' || results[x].inputType=='issn'){

							

							for (var aWork in results[x].multiWork){

								aWork = results[x].multiWork[aWork]

								var titleBib =  record.title.replace(/\//g,'').replace(/the /gi,'').trim()
								var titleWork = aWork.title.replace(/\//g,'').replace(/the /gi,'').trim()

								if (titleWork.score(titleBib,1) > 0.2){

									action.addOclcNumberOnly = true
									action.data = aWork.oclcNumber
									cb(action)
									return false

								}

							}


							//if it gets here there were no title matches
							action.failure = true




						}else if (results[x].inputType=='title/author'){


							for (var aWork in results[x].multiWork){

								aWork = results[x].multiWork[aWork]

								var titleBib =  record.title.replace(/\//g,'').replace(/the /gi,'').trim()
								var titleWork = aWork.title.replace(/\//g,'').replace(/the /gi,'').trim()

								if (titleWork.score(titleBib,1) > 0.2){

									action.addOclcNumberOnly = true
									action.data = aWork.oclcNumber
									cb(action)
									return false

								}

							}

							//if it gets here there were no title matches
							action.failure = true
							
						}else if (results[x].inputType=='title'){


							for (var aWork in results[x].multiWork){

								aWork = results[x].multiWork[aWork]

								if (record.title && aWork.title){
									var titleBib =  record.title.replace(/\//g,'').replace(/the /gi,'').trim()
									var titleWork = aWork.title.replace(/\//g,'').replace(/the /gi,'').trim()

									if (titleBib.length > 20 && titleWork.length > 20 ){

	
										if (titleWork.score(titleBib,1) > 0.2){
											if (!action.data) action.data = []
											action.possibleOclcNumberOnly = true
											action.data.push(aWork)
										}
									}
								}

							}

							//no work title matches were found
							if (!action.possibleOclcNumberOnly) {
								action.failure = true
							}

							
							cb(action)
							return false

						}



					}
				}

				

			}else{

				//nothing.... failure :(
				action.failure = true

			}

			cb(action)


		}		

		

	});











}



exports.processXML = function(xml,cb){

	//console.log(xml)

	var r = {

		response : false,
		oclcNumber : false,
		editions: false,
		eholdings: false,
		format: false,
		holdings: false,
		itemtype: false,
		owi: false,
		multiWork: [],
		authors: [],
		inputType: false,
		inputValue: false,
		fast: [],
		ddc : false,
		lcc : false

	}

	if (!xml){
			cb(true,r) 
			return false
	}


	parseString(xml, function (err, result) {


		if (!result) {
			cb(true,r) 
			return false
		}

		if (result.classify){

			if (result.classify.response){
				r.response = parseInt(result.classify.response[0]['$'].code)
			}

			if (result.classify.work){
				if (result.classify.work[0]){

					if (result.classify.work[0]['_']){
						r.oclcNumber = parseInt(result.classify.work[0]['_'])
					}

					if (result.classify.work[0]['$']){

						if (result.classify.work[0]['$']['editions']) r.editions = parseInt(result.classify.work[0]['$']['editions'])
						if (result.classify.work[0]['$']['eholdings']) r.eholdings = parseInt(result.classify.work[0]['$']['eholdings'])
						if (result.classify.work[0]['$']['format']) r.format = result.classify.work[0]['$']['format']
						if (result.classify.work[0]['$']['holdings']) r.holdings = parseInt(result.classify.work[0]['$']['holdings'])
						if (result.classify.work[0]['$']['itemtype']) r.itemtype = result.classify.work[0]['$']['itemtype']
						if (result.classify.work[0]['$']['owi']) r.owi = parseInt(result.classify.work[0]['$']['owi'])

					}


				}


			}

			if (r.response == 4){


				if (result.classify.works){


					

					if (result.classify.works[0].work){


						for (var aWork in result.classify.works[0].work){

							aWork = result.classify.works[0].work[aWork]


							var w = { title: false, oclcNumber : false, editions : false, eholdings: false, format: false, holdings: false, itemtype: false, owi:false }

							if (aWork['$']){
								
								if (aWork['$']['wi']) w.oclcNumber = parseInt(aWork['$']['wi'])
								if (aWork['$']['title']) w.title = aWork['$']['title']
								if (aWork['$']['editions']) w.editions = parseInt(aWork['$']['editions'])
								if (aWork['$']['eholdings']) w.eholdings = parseInt(aWork['$']['eholdings'])
								if (aWork['$']['format']) w.format = aWork['$']['format']
								if (aWork['$']['holdings']) w.holdings = parseInt(aWork['$']['holdings'])
								if (aWork['$']['itemtype']) w.itemtype = aWork['$']['itemtype']
								if (aWork['$']['owi']) w.owi = parseInt(aWork['$']['owi'])
								if (aWork['$']['author']) w.author = aWork['$']['author']
								if (aWork['$']['hyr']) w.hyr = aWork['$']['hyr']
								if (aWork['$']['lyr']) w.lyr = aWork['$']['lyr']
							}

							r.multiWork.push(w)


						}

					}

					


				}

			}


			if (result.classify.authors){

				if (result.classify.authors[0]){

					if (result.classify.authors[0].author){

						for (var x in result.classify.authors[0].author){

							x = result.classify.authors[0].author[x]

							var author = {name:false,lc:false,viaf:false}

							if (x['_']) author.name = x['_']

							if (x['$']){
								if (x['$'].lc) author.lc = x['$'].lc
								if (x['$'].viaf) author.viaf = parseInt(x['$'].viaf)
							}

							r.authors.push(author)


						}
					}

				}
			}

			if (result.classify.input){
				if (result.classify.input[0]){
					if (result.classify.input[0]['_']) r.inputValue = result.classify.input[0]['_']
					if (result.classify.input[0]['$'].type) r.inputType = result.classify.input[0]['$'].type
				}
			}

			if (result.classify.recommendations){

				if (result.classify.recommendations[0]){

					if (result.classify.recommendations[0].fast){

						if (result.classify.recommendations[0].fast[0]){

							if (result.classify.recommendations[0].fast[0].headings){

								if (result.classify.recommendations[0].fast[0].headings[0]){


									if (result.classify.recommendations[0].fast[0].headings[0].heading){

										for (var x in result.classify.recommendations[0].fast[0].headings[0].heading){

											x = result.classify.recommendations[0].fast[0].headings[0].heading[x]

											var fast = { subject : false, id : false  }

											if (x['_']) fast.subject = x['_']

											if (x['$']) fast.id = parseInt(x['$'].ident)

											r.fast.push(fast)
										}

									}

								}

							}

						}


					}

					if (result.classify.recommendations[0].ddc){
						if (result.classify.recommendations[0].ddc[0]){
							if (result.classify.recommendations[0].ddc[0].mostPopular){
								if (result.classify.recommendations[0].ddc[0].mostPopular[0]){
									if (result.classify.recommendations[0].ddc[0].mostPopular[0]['$']){
										if (result.classify.recommendations[0].ddc[0].mostPopular[0]['$'].nsfa) r.ddc = result.classify.recommendations[0].ddc[0].mostPopular[0]['$'].nsfa
										if (result.classify.recommendations[0].ddc[0].mostPopular[0]['$'].sfa && !r.ddc) r.ddc = result.classify.recommendations[0].ddc[0].mostPopular[0]['$'].sfa
									}
								}
							}
						}
					}

					if (result.classify.recommendations[0].lcc){
						if (result.classify.recommendations[0].lcc[0]){
							if (result.classify.recommendations[0].lcc[0].mostPopular){
								if (result.classify.recommendations[0].lcc[0].mostPopular[0]){
									if (result.classify.recommendations[0].lcc[0].mostPopular[0]['$']){
										if (result.classify.recommendations[0].lcc[0].mostPopular[0]['$'].nsfa) r.lcc = result.classify.recommendations[0].lcc[0].mostPopular[0]['$'].nsfa
										if (result.classify.recommendations[0].lcc[0].mostPopular[0]['$'].sfa && !r.lcc) r.lcc = result.classify.recommendations[0].lcc[0].mostPopular[0]['$'].sfa
									}
								}
							}
						}
					}



				}			


			}





		}else{
			cb(true,r)
			return false
		}

		cb(null,r)



	})


}
var cluster = require('cluster');
 
if (cluster.isMaster) {

  var numCPUs = require('os').cpus().length;
 
  for (var i = 0; i < numCPUs; i++) {
    cluster.fork();
  }
 
  cluster.on('exit', function() {
    console.log('A worker process died, restarting...');
    cluster.fork();
  });


} else {


	var JSONAPISerializer = require('jsonapi-serializer');
	var config = require("config")

	var express = require('express');
	var serveStatic = require('serve-static')

	var db = require(__dirname + '/lib/db.js');
	var app = express();






	app.use(serveStatic(__dirname + '/public', {'index': ['index.html']} ))

	//serializer
	var sampleSerializer = function(sample) {
		this.serialize = function () {
			return new JSONAPISerializer('sample', sample, {
		 		attributes: ['title', 'publishYear'],
			});
		};

	}




	app.get('/', function(req, res) {
		res.send(':) ' );
	});


	app.get('/api/lccrange/:range', function(req, res) {
		db.sampleByLccRange(req.params.range, function(err,results){


			if (err){
				res.status(500).send( { data : [] } );
			}else{

				if (results.length===0){
					res.status(200).send( { data : [] } );	
				}else{
					var json = new sampleSerializer(results).serialize();		
					res.status(200).send(json);				
				}
			}


		})
	});

	app.get('/api/classmark/:classmark', function(req, res) {

		db.sampleByClassmark(req.params.classmark, function(err,results){
			res.type('application/json');

			if (err){
				res.status(500).send( { data : [] } );
			}else{

				if (results.length===0){
					res.status(200).send( { data : [] } );	
				}else{
					var json = new sampleSerializer(results).serialize();		
					res.status(200).send(json);				
				}
			}


		})
	});


	app.get('/api/bnumber/:bnumber', function(req, res) {

		
		db.returnBnumber(req.params.bnumber, function(err,results){
			res.type('application/json');

			if (err){
				res.status(500).send( { } );
			}else{

				if (results.length===0){
					res.status(200).send( { } );	
				}else{
					//var json = new sampleSerializer(results).serialize();		
					res.status(200).send(JSON.stringify(results[0],null,2));				
				}
			}


		})
	});

	app.get('/api/items/:bnumber', function(req, res) {

		
		db.returnItemByBibIds(req.params.bnumber, function(err,results){
			res.type('application/json');

			if (err){
				res.status(500).send( { } );
			}else{

				if (results.length===0){
					res.status(200).send( { } );	
				}else{
					//var json = new sampleSerializer(results).serialize();		
					res.status(200).send(JSON.stringify(results, null, 2));				
				}
			}


		})
	});

	



	app.get('/api/stocknumber/:stocknumber', function(req, res) {

		
		db.returnStockNumber(req.params.stocknumber, function(err,results){
			res.type('application/json');

			if (err){
				res.status(500).send( []);
			}else{

				if (results.length===0){
					res.status(200).send( [] );	
				}else{
					//var json = new sampleSerializer(results).serialize();		
					res.status(200).send(JSON.stringify(results));				
				}
			}


		})
	});

	app.get('/api/owi/:owi', function(req, res) {

		
		db.returnOwi(req.params.owi, function(err,results){
			res.type('application/json');

			if (err){
				res.status(500).send( []);
			}else{

				if (results.length===0){
					res.status(200).send( [] );	
				}else{
					//var json = new sampleSerializer(results).serialize();		
					res.status(200).send(JSON.stringify(results));				
				}
			}


		})
	});	

	app.get('/api/isbnworks/:isbn', function(req, res) {

		
		db.returnWorksByIsbn(req.params.isbn, function(err,results){
			res.type('application/json');

			if (err){
				res.status(500).send( []);
			}else{

				if (results.length===0){
					res.status(200).send( [] );	
				}else{
					//var json = new sampleSerializer(results).serialize();		
					res.status(200).send(JSON.stringify(results));				
				}
			}


		})
	});


	app.get('/api/audience/', function(req, res) {


		var isbn = (req.query.isbn) ? req.query.isbn : false
		var oclc = (req.query.oclc) ? req.query.oclc : false
		var bnumber = (req.query.bnumber) ? req.query.bnumber : false
		var owi = (req.query.owi) ? req.query.owi : false
		var stock = (req.query.stocknumber) ? req.query.stocknumber : false

		var q = []

		if (isbn) q.push({ 'sc:isbn' : isbn})

		if (oclc) {
			q.push({ 'sc:oclc' : oclc})
			q.push({ 'classify:oclc' : oclc})
		}
		if (bnumber)  q.push({ '_id' : bnumber})
		if (owi)  q.push({ 'classify:owi' : owi})
		if (stock)  q.push({ 'sc:stockNumber' : stock})


		if (q.length>0){		
			db.returnAudience(q, function(err,results){
				res.type('application/json');

				if (err){
					res.status(500).send({});
				}else{

					if (results.length===0){
						res.status(200).send( {} );	
					}else{
						//var json = new sampleSerializer(results).serialize();		
						res.status(200).send(JSON.stringify(results));				
					}
				}
			})
		}else{
			res.status(200).send({});
		}
	});





	app.get('/api/bots', function(req, res) {

		
		db.returnBots(function(err,results){
			
			res.type('application/json');

			if (err){
				res.status(500).send( [] );
			}else{

				if (results.length===0){
					res.status(200).send( [] );	
				}else{
					//var json = new sampleSerializer(results).serialize();		
					res.status(200).send(JSON.stringify(results));				
				}
			}


		})
	});




	var server = app.listen(config['Port'], function() {
		console.log('Server started on port ' + config['Port']);
	});




}


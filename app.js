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

	var express = require('express');
	var db = require('./lib/db.js');
	var app = express();




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


	var server = app.listen(3000, function() {
		console.log('Server started on port 3000');
	});




}


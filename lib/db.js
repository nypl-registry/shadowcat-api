//this module works with the datastore to do things~

var MongoClient = require('mongodb').MongoClient
var config = require("config")
var Db = require('mongodb').Db
var Server = require('mongodb').Server

var exports = module.exports = {}

var mongoConnectURL = config['DbShadowcat']['mongoConnectURL']
var mongoIp = config['DbShadowcat']['mongoIp']
var mongoPort = config['DbShadowcat']['mongoPort']
var mongoDb = config['DbShadowcat']['mongoDb']

var mongoApiConnectURL = config['DbApi']['mongoConnectURL']
var mongoApiIp = config['DbApi']['mongoIp']
var mongoApiPort = config['DbApi']['mongoPort']
var mongoApiDb = config['DbApi']['mongoDb']





exports.testOverride = false





exports.returnBibCollection = function(cb){

	var db = new Db(mongoDb, new Server(mongoIp, mongoPort));

	db.open(function(err, db) {

		var collection = db.collection('bib')

		cb(err, collection, db)



	})



}


exports.sampleByLccRange = function(range, cb){

	if (!range){
		cb([])
		return false
	}

	//range = range.toLowerCase().replace(/\./g,'').replace(/_/g,' ')

	MongoClient.connect(mongoConnectURL, function(err, db) {



		var collection = (exports.testOverride) ? db.collection('test') : db.collection('bib')
		collection.find({ 'sc:lccCoarse' : range, 'sc:research': true}, {title: 1, publishYear: 1 }).sort( { _id : -1} ).limit(50).toArray(function(err, docs) {
			
			var r = []


			for (var x in docs){
				r.push({id:docs[x]['_id'], title:docs[x]['title'], publishYear:docs[x]['publishYear']})
			}

			db.close()
			cb(err,r)
		})
	})

}


exports.sampleByClassmark = function(classmark, cb){


	if (!classmark){
		cb([])
		return false
	}


	classmark = classmark.toLowerCase().replace(/\./g,'').replace(/_/g,' ')



	MongoClient.connect(mongoConnectURL, function(err, db) {



		var collection = (exports.testOverride) ? db.collection('test') : db.collection('bib')
		collection.find({ 'sc:classmark' : classmark, 'sc:research': true}, {title: 1, publishYear: 1 }).sort( { _id : -1} ).limit(50).toArray(function(err, docs) {

			var r = []
			for (var x in docs){
				r.push({id:docs[x]['_id'], title:docs[x]['title'], publishYear:docs[x]['publishYear']})
			}

			db.close()
			cb(err,r)
		})
	})

}









// exports.updateBibRecord = function(bib,cb){
// 	MongoClient.connect(mongoConnectURL, function(err, db) {
// 		var collection = (exports.testOverride) ? db.collection('test') : db.collection('bib')
// 		collection.update({ _id : bib.id }
// 			, { $set: bib }, function(err, result) {
// 			db.close()
// 			if (cb) cb(err,result);
// 		})

// 	})

// }


// exports.insertBibRecord = function(bib,cb){
// 	MongoClient.connect(mongoConnectURL, function(err, db) {
// 		var collection = (exports.testOverride) ? db.collection('test') : db.collection('bib')
// 		collection.insert(bib, function(err, result) {
// 			if (cb) cb(err,result);
// 			db.close()
// 		})
// 	})
// }











// exports.updateItemRecord = function(item,cb){
// 	MongoClient.connect(mongoConnectURL, function(err, db) {
// 		var collection = (exports.testOverride) ? db.collection('test') : db.collection('item')
// 		collection.update({ _id : item.id }
// 			, { $set: item }, function(err, result) {
// 			db.close()
// 			if (cb) cb(err,result);
// 		})

// 	})

// }


// exports.insertItemRecord = function(item,cb){
// 	MongoClient.connect(mongoConnectURL, function(err, db) {
// 		var collection = (exports.testOverride) ? db.collection('test') : db.collection('item')
// 		collection.insert(item, function(err, result) {
// 			if (cb) cb(err,result);
// 			db.close()
// 		})
// 	})
// }


exports.returnBnumber = function(id,cb){


	//if a db is already active 


	if (!id) return {};


	MongoClient.connect(mongoConnectURL, function(err, db) {

		id = id.replace(/b/gi,'').replace(/\s/gi,'')
		id = parseInt(id)
		console.log(err)
		var collection = (exports.testOverride) ? db.collection('test') : db.collection('bib')
		collection.find({_id : id}).toArray(function(err, docs) {
			db.close()
			cb(err,docs)
		});
	});	


}



exports.returnBibById = function(id,cb,db){


	//if a db is already active 
	if (db){

		var collection = (exports.testOverride) ? db.collection('test') : db.collection('bib')
		collection.find({_id : id}).toArray(function(err, docs) {
			cb(err,docs)
		});

	}else{

		MongoClient.connect(mongoConnectURL, function(err, db) {
			var collection = (exports.testOverride) ? db.collection('test') : db.collection('bib')
			collection.find({_id : id}).toArray(function(err, docs) {
				db.close()
				cb(err,docs)
			});
		});	

	}

}

exports.returnItemByBibIds = function(id,cb,db){


	//if a db is already active 
	if (db){

		var collection = (exports.testOverride) ? db.collection('test') : db.collection('item')
		collection.find({bibIds : id}).toArray(function(err, docs) {
			cb(err,docs)
		});

	}else{

		MongoClient.connect(mongoConnectURL, function(err, db) {
			var collection = (exports.testOverride) ? db.collection('test') : db.collection('item')
			collection.find({bibIds : id}).toArray(function(err, docs) {
				db.close()
				cb(err,docs)
			})
		})

	}




}




exports.allBibs = function(cb){



	MongoClient.connect(mongoConnectURL, function(err, db) {
		var collection = (exports.testOverride) ? db.collection('test') : db.collection('bib')


		var cursor = collection.find({})
		
		cursor.on('data', function(doc) {

			cursor.pause()

			//send the data to the calling function with the cursor

			cb(doc,cursor,db)


		});



		cursor.once('end', function() {
			db.close();
		});




	})


}




exports.allItemsReverse = function(cb){



	MongoClient.connect(mongoConnectURL, function(err, db) {

		console.log(err)

		var collection = (exports.testOverride) ? db.collection('test') : db.collection('item')


		var cursor = collection.find({}).sort({ $natural: -1 });
		
		cursor.on('data', function(doc) {

			cursor.pause()

			//send the data to the calling function with the cursor

			cb(doc,cursor,db)


		});



		cursor.once('end', function() {
			db.close();
		});




	})


}




// exports.dropTestCollection = function(cb){
// 	MongoClient.connect(mongoConnectURL, function(err, db) {
// 		var collection = db.collection('test')
// 		collection.drop(function(err, reply) {
// 			if (cb) cb(reply)
// 		})
// 	})
// }



exports.returnNextApiHoldingsWork = function(cb){


	MongoClient.connect(mongoConnectURL, function(err, db) {
		var collection = (exports.testOverride) ? db.collection('test') : db.collection('apiHoldings')
		collection.find().limit(1).toArray(function(err, docs) {
			db.close()
			cb(err,docs)
		})
	})	



}

exports.deleteApiHoldingsWork = function(id,cb){


	MongoClient.connect(mongoConnectURL, function(err, db) {
		var collection = (exports.testOverride) ? db.collection('test') : db.collection('apiHoldings')
		collection.remove({_id : id}, function(err, results){

			if (err) console.log(err)

			db.close()
			cb(err,results)


		})


	})



}

exports.returnNextApiLccnWork = function(cb){

	MongoClient.connect(mongoConnectURL, function(err, db) {
		if (err) console.log(err)
		var collection = (exports.testOverride) ? db.collection('test') : db.collection('apiLccn')
		collection.find().limit(1).toArray(function(err, docs) {
			db.close()
			cb(err,docs)
		})
	})	



}

exports.deleteApiLccnWork = function(id,cb){


	MongoClient.connect(mongoConnectURL, function(err, db) {
		var collection = (exports.testOverride) ? db.collection('test') : db.collection('apiLccn')
		collection.remove({_id : id}, function(err, results){

			if (err) console.log(err)

			db.close()
			cb(err,results)


		})


	})



}



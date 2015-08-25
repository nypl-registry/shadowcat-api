var should = require('should')
var api = require("../lib/apiHoldings.js");



describe('API Holdings', function () {

	this.timeout(30000);


	it('checkOclcHoldings - it should return a string with nypl holdings', function (done) {
	


		api.checkOclcHoldings('499832410','10016','1',function(results){


			results.search('New York Public Library System').should.be.above(-1)


			done()


		})



	})

	it('checkOclcHoldings - it should not return a string with nypl holdings', function (done) {
	


		api.checkOclcHoldings('681467808','10016','1',function(results){


			results.search('New York Public Library System').should.equal(-1)
			

			done()


		})



	})


	it('checkOclcHoldingsTwoPagesForNYPL - it should return an object with both pages results', function (done) {
	


		api.checkOclcHoldingsTwoPagesForNYPL('4998324101','10016',function(results){

			results.one.should.be.above(-1)
			results.two.should.equal(-1)
			results.all.should.equal(true)

			done()


		})



	})




})
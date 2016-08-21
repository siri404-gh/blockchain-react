var should = require('chai').should();
var supertest = require("supertest");
var url = supertest("http://localhost:3000");
var port = '8545';
var coinBaseAddress = '0x16a385071c49074f2f86a2af6d8746813ecbc27f';

describe("Testing API response for getting transactions", function(err){
    it("Should return an array", function(done){
        this.timeout(15000);
        url
            .get("/blocks?port="+port+"&coinBaseAddress="+coinBaseAddress)
            .expect(200)
            .expect('Content-Type', /json/)
            .end(function(err, res) {
                if(err) {
                    throw err;
                }
                var response = JSON.parse(res.text);
                response.length.should.not.be.empty;
                done();
            });
    });
});
describe("Testing API response for getting recently updated customers", function(err){
    it("Should return an array", function(done){
        this.timeout(25000);
        url
            .get("/customers?port="+port+"&coinBaseAddress="+coinBaseAddress)
            .expect(200)
            .expect('Content-Type', /json/)
            .end(function(err, res) {
                if(err) {
                    throw err;
                }
                var response = JSON.parse(res.text);
                response.length.should.not.be.empty;
                done();
            });
    });
});
describe("Testing API response for getting block details", function(err){
    it("Should return an object or an empty object if not found", function(done){
        url
            .get("/blocks/1600?port="+port+"&coinBaseAddress="+coinBaseAddress)
            .expect(200)
            .end(function(err, res) {
                if(err) {
                    throw err;
                }
                var response = JSON.parse(res.text);
                response.number.should.be.equal(1600);
                done();
            });
    });
});

describe("Testing API response for getting a single user's details", function(err){
    it("Should return an object or an empty object if not found", function(done){
        url
            .get("/customers/1?port="+port+"&coinBaseAddress="+coinBaseAddress)
            .expect(200)
            .end(function(err, res) {
                if(err) {
                    throw err;
                }
                var response = JSON.parse(res.text);
                response.firstName.should.be.equal('Allen');
                done();
            });
    });
});

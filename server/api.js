var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var app = new express();
var utils = require('./utils');
var variables = require('../variables');

app.set('port', variables.port);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(express.static( '.'));

app.get('/blocks', function(req, res) {
    var blocks = utils.getRecentBlocks(req.query.port, req.query.coinBaseAddress);
    res.send( (blocks)? blocks : {} );
});

app.get('/blocks/:id', function(req, res) {
    var id = req.params.id;
    var blockDetails = utils.getBlockDetails(id, req.query.port, req.query.coinBaseAddress);
    res.send( (blockDetails)? blockDetails : [] );
});

app.get('/customers', function(req, res) {
    var customers = utils.getRecentCustomers(req.query.port, req.query.coinBaseAddress);
    res.send( (customers)? customers : [] );
});

app.get('/customers/:id', function(req, res) {
    var customer = utils.getCustomerDetailsFromDB(req.params.id, req.query.params, req.query.coinBaseAddress);
    res.send( (customer)? customer : false );
});

app.post('/customers', function(req, res) {
    var transHash = utils.addSkipTraceRecordOnChain(req.body.port, req.body.coinBaseAddress, req.body.firstName, req.body.middleName, req.body.lastName, req.body.aliasName, req.body.DOB, req.body.SSN, req.body.passportNumber, req.body.homePhone1, req.body.homePhone2, req.body.homePhone3, req.body.workPhone1, req.body.workPhone2, req.body.workPhone3, req.body.mobilePhone1, req.body.mobilePhone2, req.body.mobilePhone3, req.body.currentAddress1, req.body.currentAddress2, req.body.currentAddress3, req.body.employerName1, req.body.employerName2, req.body.employerName3, req.body.productName1, req.body.productName2, req.body.productName3, req.body.remarks);
    res.send( (transHash)? transHash : '' );
});

app.put('/customers/:id', function(req, res) {
    var customerID = req.params.id;
    var transHash = utils.updateSkipTraceRecordOnChain (req.body.port, req.body.coinBaseAddress, customerID, req.body.firstName, req.body.middleName, req.body.lastName, req.body.aliasName, req.body.DOB, req.body.SSN, req.body.passportNumber, req.body.homePhone1, req.body.homePhone2, req.body.homePhone3, req.body.workPhone1, req.body.workPhone2, req.body.workPhone3, req.body.mobilePhone1, req.body.mobilePhone2, req.body.mobilePhone3, req.body.currentAddress1, req.body.currentAddress2, req.body.currentAddress3, req.body.employerName1, req.body.employerName2, req.body.employerName3, req.body.productName1, req.body.productName2, req.body.productName3, req.body.remarks);
    res.send( (transHash)? transHash : '' );
});

app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});

/**
 * @page lib/faq FAQ
 * @parent lib
 *
 * Checkout these frequently asked questions
 *
 * @body
 *
 * ## How to contribute to DocumentJS
 */
var React = require('react');
var moment = require('moment');
var Link = require('react-router').Link;
var dummyCustomers = require('./customers');
var variables = require('../../../../variables');
var Web3 = require('web3');
var web3 = new Web3();
var api = variables.api+':'+variables.port;
var provider = variables.provider;
var notificationDelay = variables.notificationDelay;
var SkipTraceContractAddress = variables.SkipTraceContractAddress;
var SkipTraceContractSequence = variables.SkipTraceContractSequence;
var SkipTraceCompiled;
var SkipTraceContract;
var updatePanelMessage = variables.updatePanelMessage;
var viewPanelMessage = variables.viewPanelMessage;
var homePanelMessage = variables.homePanelMessage;
var addPanelMessage = variables.addPanelMessage;

module.exports = {
    api: api,
    homePanelMessage: homePanelMessage,
    addPanelMessage: addPanelMessage,
    updatePanelMessage: updatePanelMessage,
    viewPanelMessage: viewPanelMessage,
    dummyCustomers: dummyCustomers,
    getInitialState:{
        firstName: '',
        firstName2: '',
        firstName3: '',
        lastName: '',
        lastName2: '',
        lastName3: '',
        middleName: '',
        aliasName: '',
        dob: '',
        ssn: '',
        ssn2: '',
        ssn3: '',
        passportNumber: '',
        passportNumber2: '',
        passportNumber3: '',
        employerName1: '',
        employerName2:'',
        employerName3: '',
        productName1: '',
        productName2: '',
        productName3: '',
        remarks: '',
        mobilePhone1: '',
        mobilePhone2: '',
        mobilePhone3: '',
        homePhone1: '',
        homePhone2: '',
        homePhone3: '',
        workPhone1: '',
        workPhone2: '',
        workPhone3: '',
        currentAddress1: '',
        currentAddress2: '',
        currentAddress3: '',
        timestamp: '',
        userName: sessionStorage.getItem('username'),
        show: false,
        bankID: '',
        transactions: [],
        recentUpdations: []
    },
    populate: function(el, i, self, customers) {
        var self2 = this;
        var id = (el)? +(el.target.id) : ((i)? i : 0);
        var singleCustomer;
        if(customers) {
            singleCustomer = customers[id];
        } else {
            $.ajax({
                async: false,
                url: self2.api+'/customers/'+id,
                method: 'GET',
                success: function(res) {
                    singleCustomer = res;
                }
            });
        }
        if(singleCustomer) {
            var overrideButtonId = "";
            var overrideButtonClass = "btn-disabled";
            if(singleCustomer.product3 == "1") {
                overrideButtonId = "#override-modal";
                overrideButtonClass = "btn-primary";
            }
            self.setState({
                customerID: singleCustomer.customerID,
                firstName: singleCustomer.firstName.split('-')[0],
                firstName2: singleCustomer.firstName.split('-')[1],
                firstName3: singleCustomer.firstName.split('-')[2],
                lastName: singleCustomer.lastName.split('-')[0],
                lastName2: singleCustomer.lastName.split('-')[1],
                lastName3: singleCustomer.lastName.split('-')[2],
                middleName: singleCustomer.middleName,
                aliasName: singleCustomer.aliasName,
                dob: moment(singleCustomer.DOB, 'D-MMM-YY').format('YYYY-MM-DD'),
                ssn: singleCustomer.SSN.substr(0, 12),
                ssn2: singleCustomer.SSN.substr(12, 12),
                ssn3: singleCustomer.SSN.substr(24, 12),
                passportNumber: singleCustomer.passportNumber.substr(0, 9),
                passportNumber2: singleCustomer.passportNumber.substr(9, 9),
                passportNumber3: singleCustomer.passportNumber.substr(18, 9),
                employerName1: singleCustomer.employer1,
                employerName2: singleCustomer.employer2,
                employerName3: singleCustomer.employer3,
                productName1: singleCustomer.product1,
                productName2: singleCustomer.product2,
                productName3: singleCustomer.product3,
                remarks: singleCustomer.remarks,
                mobilePhone1: singleCustomer.mobilePhone1,
                mobilePhone2: singleCustomer.mobilePhone2,
                mobilePhone3: singleCustomer.mobilePhone3,
                homePhone1: singleCustomer.homePhone1,
                homePhone2: singleCustomer.homePhone2,
                homePhone3: singleCustomer.homePhone3,
                workPhone1: singleCustomer.workPhone1,
                workPhone2: singleCustomer.workPhone2,
                workPhone3: singleCustomer.workPhone3,
                currentAddress1: singleCustomer.currentAddress1,
                currentAddress2: singleCustomer.currentAddress2,
                currentAddress3: singleCustomer.currentAddress3,
                timestamp: singleCustomer.timestamp,
                userName: sessionStorage.getItem('username'),
                show: true,
                bankID: singleCustomer.bankID,
                overrideButtonId: overrideButtonId,
                overrideButtonClass: overrideButtonClass
            });
        }
        return true;
    },
    addSkipTraceRecordOnChain: function (firstName, middleName, lastName, aliasName, DOB, SSN, passportNumber, homePhone1, homePhone2, homePhone3, workPhone1, workPhone2, workPhone3, mobilePhone1, mobilePhone2, mobilePhone3, currentAddress1, currentAddress2, currentAddress3, employerName1, employerName2, employerName3, productName1, productName2, productName3, remarks) {
        var transHash;
        var self = this;
        $.ajax({
            async: false,
            url: self.api+'/customers/',
            method: 'POST',
            data: {
                port: sessionStorage.getItem('port'),
                coinBaseAddress: sessionStorage.getItem('coinBaseAddress'),
                firstName: firstName,
                middleName: middleName,
                lastName: lastName,
                aliasName: aliasName,
                DOB: DOB,
                SSN: SSN,
                passportNumber: passportNumber,
                homePhone1: homePhone1,
                homePhone2: homePhone2,
                homePhone3: homePhone3,
                workPhone1: workPhone1,
                workPhone2: workPhone2,
                workPhone3: workPhone3,
                mobilePhone1: mobilePhone1,
                mobilePhone2: mobilePhone2,
                mobilePhone3: mobilePhone3,
                currentAddress1: currentAddress1,
                currentAddress2: currentAddress2,
                currentAddress3: currentAddress3,
                employerName1: employerName1,
                employerName2: employerName2,
                employerName3: employerName3,
                productName1: productName1,
                productName2: productName2,
                productName3: productName3,
                remarks: remarks
            },
            success: function(res) {
                transHash = res;
            }
        });
        return transHash;
    },
    updateSkipTraceRecordOnChain: function (customerID, firstName, middleName, lastName, aliasName, DOB, SSN, passportNumber, homePhone1, homePhone2, homePhone3, workPhone1, workPhone2, workPhone3, mobilePhone1, mobilePhone2, mobilePhone3, currentAddress1, currentAddress2, currentAddress3, employerName1, employerName2, employerName3, productName1, productName2, productName3, remarks) {
        var transHash;
        var self = this;
        $.ajax({
            async: false,
            url: self.api+'/customers/'+customerID,
            method: 'PUT',
            data: {
                port: sessionStorage.getItem('port'),
                coinBaseAddress: sessionStorage.getItem('coinBaseAddress'),
                firstName: firstName,
                middleName: middleName,
                lastName: lastName,
                aliasName: aliasName,
                DOB: DOB,
                SSN: SSN,
                passportNumber: passportNumber,
                homePhone1: homePhone1,
                homePhone2: homePhone2,
                homePhone3: homePhone3,
                workPhone1: workPhone1,
                workPhone2: workPhone2,
                workPhone3: workPhone3,
                mobilePhone1: mobilePhone1,
                mobilePhone2: mobilePhone2,
                mobilePhone3: mobilePhone3,
                currentAddress1: currentAddress1,
                currentAddress2: currentAddress2,
                currentAddress3: currentAddress3,
                employerName1: employerName1,
                employerName2: employerName2,
                employerName3: employerName3,
                productName1: productName1,
                productName2: productName2,
                productName3: productName3,
                remarks: remarks
            },
            success: function(res) {
                transHash = res;
            }
        });
        return transHash;
    },
    web3Init: function() {
        var port = sessionStorage.getItem('port');
        web3.setProvider(new web3.providers.HttpProvider(provider+':'+port));
        web3.eth.defaultAccount = web3.eth.accounts[0];
        SkipTraceCompiled = web3.eth.compile.solidity(SkipTraceContractSequence);
        SkipTraceContract = web3.eth.contract(SkipTraceCompiled.CustomerSkipTrace.info.abiDefinition);
    },
    watchTransactionEvent: function(self) {
        // console.log('Watching for transactions..');
        web3.eth.filter('latest').watch(function(error, result){
            if (!error) {
                console.log(result);
                self.displayTransactions();
            }
        });
    },
    stopWatchTransactionEvent: function() {
        // console.log('Stopping watching for transactions..');
        web3.eth.filter('latest').stopWatching(function(error, result){
            if (!error) {
                console.log('latest='+result);
            }
        });
    },
    watchAddEvent: function(self) {
        // console.log('Watching for user add..');
        this.web3Init();
        var addEvent = SkipTraceContract.at(SkipTraceContractAddress).SkipTraceAddEvent();
        addEvent.watch(function(error, result){
            var blocks = +sessionStorage.getItem('blocks');
            var profile = result.args.profile.split('|');
            var firstName = profile[0].replace('firstName:','');
            var lastName = profile[2].replace('lastName:', '');
            if(blocks > 0 && result && result.blockNumber !== blocks) {
                $('.customer-added-alert').show();
                $('.customer-added-alert').html('Customer record ' + result.args.customerID.c[0] + ' ' + firstName.split('-')[0] + ' ' + lastName.split('-')[0] + ' ' + ' successfully created.');
                $('.customer-added-alert').delay(notificationDelay).fadeOut();
            }
            sessionStorage.setItem('blocks', result.blockNumber);
        });
    },
    stopWatchingAddEvent: function() {
        // console.log('Stopping watching for user add..');
        this.web3Init();
        var addEvent = SkipTraceContract.at(SkipTraceContractAddress).SkipTraceAddEvent();
        addEvent.stopWatching();
    },
    watchUpdateEvent: function(self) {
        // console.log('Watching for user updates..');
        this.web3Init();
        var updateEvent = SkipTraceContract.at(SkipTraceContractAddress).SkipTraceUpdateEvent();
        updateEvent.watch(function(error, result){
            var blocks = +sessionStorage.getItem('updateBlocks');
            var profile = result.args.profile.split('|');
            var firstName = profile[0].replace('firstName:','');
            var lastName = profile[2].replace('lastName:', '');
            if (blocks > 0 && result && result.blockNumber !== blocks) {
                $('.customer-updated-alert').show();
                $('.customer-updated-alert').html('Customer record ' + result.args.customerID.c[0] + ' ' + firstName.split('-')[0] + ' ' + lastName.split('-')[0] + ' ' + ' successfully overwritten.');
                $('.customer-updated-alert').delay(notificationDelay).fadeOut();
            }
            sessionStorage.setItem('updateBlocks', result.blockNumber);
        });
    },
    stopWatchingUpdateEvent: function() {
        // console.log('Stopping watching for user updates..');
        this.web3Init();
        var updateEvent = SkipTraceContract.at(SkipTraceContractAddress).SkipTraceUpdateEvent();
        updateEvent.stopWatching();
    },
    getRecentUpdations: function(self) {
        var self2 = this;
        var recentUpdations = [
            <div className='row row-underline' key={Math.random()}>
                <div className='col-xs-1 blocks-col'>
                    <b>Id</b>
                </div>
                <div className='col-xs-3 blocks-col'>
                    <b>Name</b>
                </div>
                <div className='col-xs-3 blocks-col'>
                    <b>Last Updated By</b>
                </div>
                <div className='col-xs-4 blocks-col'>
                    <b>Last Updated at</b>
                </div>
            </div>
        ];
        $.ajax({
            url: self2.api+'/customers',
            method: 'GET',
            data: {
                port: sessionStorage.getItem('port'),
                coinBaseAddress: sessionStorage.getItem('coinBaseAddress')
            },
            success: function(res) {
                res = res.sort(function(a, b) {
                    return b.timestamp - a.timestamp;
                });
                res.forEach(function(c) {
                    recentUpdations.push(
                        <div key={Math.random()} className='row row-underline'>
                            <div className='col-xs-1 blocks-col'>
                                {c.customerID}
                            </div>
                            <div className='col-xs-3 blocks-col'>
                                <a href='#' id={c.customerID} onClick={self.populate}>{c.firstName.split('-')[0]+' '+c.lastName.split('-')[0]}</a>
                            </div>
                            <div className='col-xs-3 blocks-col'>
                            <span className='bank-name'>{c.bankID}</span>
                            <img className='logo-small' src={'/images/'+c.bankID.toLowerCase().replace('_','')+'.png'}/>
                            </div>
                            <div className='col-xs-4 blocks-col'>
                            {moment.unix(c.timestamp).format("MM/DD/YYYY hh:mm:ss")}
                            </div>
                        </div>
                    );
                });
                self.setState({
                    recentUpdations: recentUpdations
                });
            }
        });
    }
};

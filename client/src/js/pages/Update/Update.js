var React = require('react');
var NavBar = require('../../components/Navbar/Navbar');
var Footer = require('../../components/Footer/Footer');
var Panel = require('../../components/Panel/Panel');
var PanelCollapse = require('../../components/PanelCollapse/PanelCollapse');
var moment = require('moment');
var utils = require('../../utils/utils');
var forms = require('./forms');
var panelMessage = utils.updatePanelMessage;

module.exports = React.createClass({
    getInitialState: function() {
        return utils.getInitialState;
    },
    populate: function(el, i) {
        if(utils.populate(el, i, this, null)) {
            $('body').animate({
                scrollTop : $("#recent").offset().top + $("#recent").innerHeight()+5
            }, 250);
        }
    },
    formSubmit: function(ev) {
        ev.preventDefault();
        utils.search(this);
    },
    append: function() {
        utils.append(this);
    },
    saveToDB: function(ev) {
        ev.preventDefault();
        var transHash = utils.updateSkipTraceRecordOnChain(this.state.customerID, this.state.firstName, this.state.middleName, this.state.lastName, this.state.aliasName, moment(this.state.dob, 'YYYY-MM-DD').format('D-MMM-YY'), this.state.ssn+this.state.ssn2+this.state.ssn3, this.state.passportNumber+this.state.passportNumber2+this.state.passportNumber3, this.state.homePhone1, this.state.homePhone2, this.state.homePhone3, this.state.workPhone1, this.state.workPhone2, this.state.workPhone3, this.state.mobilePhone1, this.state.mobilePhone2, this.state.mobilePhone3, this.state.currentAddress1, this.state.currentAddress2, this.state.currentAddress3, this.state.employerName1, this.state.employerName2, this.state.employerName3, this.state.productName1, this.state.productName2, this.state.productName3, this.state.remarks);
        if(transHash) {
            var initialState = utils.getInitialState;
            initialState.recentUpdations = this.state.recentUpdations;
            this.setState(initialState);
            this.setState({
                show: true
            });
            $('#transaction-alert').show().html("<div class='alert alert-success'><strong>Transaction submitted to the block chain with the following with the following id : </strong> "+transHash+"</div>");
            $('body').animate({
                scrollTop : $("#transaction-alert").offset().top
            }, 250);
        }
    },
    render: function() {
        var updateForm = forms.updateForm(this);
        var searchForm = forms.searchForm(this);
        return (this.state.show)? (
            <div>
                <NavBar logged={sessionStorage.getItem('logged')}/>
                <h3>Update Customer Details</h3>
                <div className='row middle-row'>
                    <div className='col-md-10'>
                        <Panel message={panelMessage} type="warning"/>
                        {searchForm}
                        <PanelCollapse message="Recently updated customers" target="recent"/>
                        <div id='recent' className='dataTable collapse in'>
                            {this.state.recentUpdations}
                        </div>
                        {updateForm}
                        <div id='transaction-alert'></div>
                    </div>
                </div>
                <Footer/>
            </div>
        ) :
        (
            <div>
                <NavBar logged={sessionStorage.getItem('logged')}/>
                <h3>Update Customer Details</h3>
                <div className='row middle-row'>
                    <div className='col-md-10'>
                        <Panel message={panelMessage} type="warning"/>
                        {searchForm}
                        <PanelCollapse message="Recently updated customers" target="recent"/>
                        <div id='recent' className='recent-updations dataTable collapse in'>
                            {this.state.recentUpdations}
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    },
    componentWillMount: function() {
        utils.getRecentUpdations(this);
    },
    componentDidUpdate: function() {
        $('.recent-updations').hide();
        $('.recent-updations').fadeIn();
    }
});

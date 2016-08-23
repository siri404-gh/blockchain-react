var React = require('react');
var NavBar = require('../../components/Navbar/Navbar');
var Footer = require('../../components/Footer/Footer');
var Panel = require('../../components/Panel/Panel');
var PanelCollapse = require('../../components/PanelCollapse/PanelCollapse');
var Searchbar = require('../../components/Searchbar/Searchbar');
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
    formSubmit: function(val) {
        this.populate(null, val);
    },
    append: function(el) {
        var state = this.state;
        state[el.target.id] = el.target.value;
        this.setState(state);
    },
    saveToDB: function(ev) {
        ev.preventDefault();
        var transHash = utils.updateSkipTraceRecordOnChain(this.state.customerID, this.state.firstName+'-'+this.state.firstName2+'-'+this.state.firstName3, this.state.middleName, this.state.lastName+'-'+this.state.lastName2+'-'+this.state.lastName3, this.state.aliasName, moment(this.state.dob, 'YYYY-MM-DD').format('D-MMM-YY'), this.state.ssn+this.state.ssn2+this.state.ssn3, this.state.passportNumber+this.state.passportNumber2+this.state.passportNumber3, this.state.homePhone1, this.state.homePhone2, this.state.homePhone3, this.state.workPhone1, this.state.workPhone2, this.state.workPhone3, this.state.mobilePhone1, this.state.mobilePhone2, this.state.mobilePhone3, this.state.currentAddress1, this.state.currentAddress2, this.state.currentAddress3, this.state.employerName1, this.state.employerName2, this.state.employerName3, this.state.productName1, this.state.productName2, this.state.productName3, this.state.remarks);
        if(transHash) {
            var newState = utils.getInitialState;
            newState.recentUpdations = this.state.recentUpdations;
            newState.show = true;
            this.setState(newState);
            $('#transaction-alert').show().html("<div class='alert alert-success'><strong>Transaction submitted to the block chain with the following id : </strong> "+transHash+"</div>");
            $('body').animate({
                scrollTop : $("#transaction-alert").offset().top
            }, 250);
        }
    },
    render: function() {
        var updateForm = forms.updateForm(this);
        return (
            <div>
                <NavBar logged={sessionStorage.getItem('logged')} bank={sessionStorage.getItem('username')}/>
                <h3>Update Customer Details</h3>
                <div className='row middle-row'>
                    <div className='col-md-10'>
                        <Panel message={panelMessage} type="warning"/>
                        <Searchbar formSubmit={this.formSubmit}/>
                        <PanelCollapse message="Recently updated customers" target="recent"/>
                        <div id='recent' className='recent-updations dataTable collapse in'>
                            {this.state.recentUpdations}
                        </div>
                        {(this.state.show)? updateForm : []}
                        <div id='transaction-alert'></div>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    },
    componentDidMount: function() {
        utils.getRecentUpdations(this);
        utils.watchAddEvent();
        utils.watchUpdateEvent();
    },
    componentDidUpdate: function() {
        $('.recent-updations').hide();
        $('.recent-updations').fadeIn();
    },
    componentWillUnmount: function() {
        this.setState({
            recentUpdations : []
        });
        utils.stopWatchingAddEvent();
        utils.stopWatchingUpdateEvent();
    }
});

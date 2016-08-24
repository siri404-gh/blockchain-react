var React = require('react');
var NavBar = require('../../components/Navbar/Navbar');
var Footer = require('../../components/Footer/Footer');
var Panel = require('../../components/Panel/Panel');
var moment = require('moment');
var forms = require('./forms');
var utils = require('../../utils/utils');

module.exports = React.createClass({
    getInitialState: function() {
        return utils.getInitialState;
    },
    render: function() {
        var addForm = forms.addForm(this);
        return (
            <div>
                <NavBar logged={sessionStorage.getItem('logged')} bank={sessionStorage.getItem('username')}/>
                <h3>Add New Customer</h3>
                <div className='row middle-row'>
                    <div className='col-md-10'>
                        {addForm}
                        <div id='transaction-alert'></div>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    },
    append: function(el) {
        var state = this.state;
        state[el.target.id] = el.target.value;
        this.setState(state);
    },
    saveToDB: function(ev) {
        ev.preventDefault();
        var transHash = utils.addSkipTraceRecordOnChain(this.state.firstName+'-'+this.state.firstName2+'-'+this.state.firstName3, this.state.middleName, this.state.lastName+'-'+this.state.lastName2+'-'+this.state.lastName3, this.state.aliasName, moment(this.state.dob, 'YYYY-MM-DD').format('D-MMM-YY'), this.state.ssn+this.state.ssn2+this.state.ssn3, this.state.passportNumber+this.state.passportNumber2+this.state.passportNumber3, this.state.homePhone1, this.state.homePhone2, this.state.homePhone3, this.state.workPhone1, this.state.workPhone2, this.state.workPhone3, this.state.mobilePhone1, this.state.mobilePhone2, this.state.mobilePhone3, this.state.currentAddress1, this.state.currentAddress2, this.state.currentAddress3, this.state.employerName1, this.state.employerName2, this.state.employerName3, this.state.productName1, this.state.productName2, this.state.productName3, this.state.remarks);
        if(transHash) {
            this.setState(utils.getInitialState);
            $('#transaction-alert').show().html("<div class='alert alert-success'><strong>Transaction submitted to the block chain with the following id : </strong> "+transHash+"</div>");
            $('body').animate({
                scrollTop : $("#transaction-alert").offset().top
            }, 250);
        }
    },
    componentDidMount: function() {
        var customers = utils.dummyCustomers;
        var rand = Math.floor((Math.random() * 10) + 1);
        utils.populate(null, rand-1, this, customers);
        $("form input[type='text']").each(function() {
            $(this).attr('placeholder', $(this).attr('id'));
        });
        utils.watchAddEvent();
        utils.watchUpdateEvent();
    },
    componentWillUnmount: function() {
        utils.stopWatchingAddEvent();
        utils.stopWatchingUpdateEvent();
    }
});

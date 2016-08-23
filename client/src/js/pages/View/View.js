var React = require('react');
var NavBar = require('../../components/Navbar/Navbar');
var Footer = require('../../components/Footer/Footer');
var Panel = require('../../components/Panel/Panel');
var PanelCollapse = require('../../components/PanelCollapse/PanelCollapse');
var Searchbar = require('../../components/Searchbar/Searchbar');
var utils = require('../../utils/utils');
var forms = require('./forms');
var moment = require('moment');
var panelMessage = utils.viewPanelMessage;

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
    render: function() {
        var viewForm = forms.viewForm(this);
        var renderer = [];
        if(this.state.show) {
            renderer.push(
                <div className='col-md-10' key="1">
                    <Panel message={panelMessage} type="warning"/>
                    <Searchbar formSubmit={this.formSubmit}/>
                    <PanelCollapse message="Recently updated customers" target="recent"/>
                    <div id='recent' className='dataTable collapse in'>
                        {this.state.recentUpdations}
                    </div>
                    {viewForm}
                </div>
            );
        } else {
            renderer.push(
                <div className='col-md-10' key="1">
                    <Panel message={panelMessage} type="warning"/>
                    <Searchbar formSubmit={this.formSubmit}/>
                    <PanelCollapse message="Recently updated customers" target="recent"/>
                    <div id='recent' className='recent-updations dataTable collapse in'>
                        {this.state.recentUpdations}
                    </div>
                </div>
            );
        }
        return (
            <div>
                <div id="override-modal" className="modal fade" role="dialog">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="close" data-dismiss="modal">&times;</button>
                                <h4 className="modal-title">Local copy successfully overwritten.</h4>
                            </div>
                        </div>
                    </div>
                </div>
                <NavBar logged={sessionStorage.getItem('logged')} bank={sessionStorage.getItem('username')}/>
                <h3>View Customer Details</h3>
                    <div className='row middle-row'>
                        {renderer}
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
        utils.stopWatchingAddEvent();
        utils.stopWatchingUpdateEvent();
    }
});

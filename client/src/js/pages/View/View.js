var React = require('react');
var NavBar = require('../../components/Navbar/Navbar');
var Footer = require('../../components/Footer/Footer');
var Panel = require('../../components/Panel/Panel');
var PanelCollapse = require('../../components/PanelCollapse/PanelCollapse');
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
    formSubmit: function(ev) {
        ev.preventDefault();
        utils.search(this);
    },
    render: function() {
        var viewForm = forms.viewForm(this);
        var searchForm = forms.searchForm(this);
        return (this.state.show) ? (
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
                <NavBar logged={sessionStorage.getItem('logged')}/>
                <h3>View Customer Details</h3>
                <div className='row middle-row'>
                    <div className='col-md-10'>
                        <Panel message={panelMessage} type="warning"/>
                        {searchForm}
                        <PanelCollapse message="Recently updated customers" target="recent"/>
                        <div id='recent' className='dataTable collapse in'>
                            {this.state.recentUpdations}
                        </div>
                        {viewForm}
                    </div>
                </div>
                <Footer/>
            </div>
        ) :
        (
            <div>
                <NavBar logged={sessionStorage.getItem('logged')}/>
                <h3>View Customer Details</h3>
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
        );
    },
    componentWillMount: function() {
        utils.getRecentUpdations(this);
    },
    componentDidUpdate: function() {
        $('.recent-updations').hide();
        $('.recent-updations').fadeIn();
    }
});

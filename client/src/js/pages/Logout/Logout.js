var React = require('react');
var NavBar = require('../../components/Navbar/Navbar');
var Footer = require('../../components/Footer/Footer');
var utils = require('../../utils/utils');

var Home = React.createClass({
    componentWillMount: function() {
        utils.stopWatchingAddEvent();
        utils.stopWatchingUpdateEvent();
        utils.stopWatchingUpdateEvent();
        sessionStorage.clear();
    },
    render: function() {
        return (
            <div>
                <NavBar logged={sessionStorage.getItem('logged')} bank={sessionStorage.getItem('username')}/>
                <h3>Logged Out!</h3>
                <div className='row middle-row' key="1">
                </div>
                <Footer/>
            </div>
        );
    }
});

module.exports = Home;

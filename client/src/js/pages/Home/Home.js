var React = require('react');
var NavBar = require('../../components/Navbar/Navbar');
var Footer = require('../../components/Footer/Footer');
var Panel = require('../../components/Panel/Panel');
var PanelCollapse = require('../../components/PanelCollapse/PanelCollapse');
var moment = require('moment');
var Link = require('react-router').Link;
var forms = require('./forms');
var utils = require('../../utils/utils');
var users = require('../../utils/users');

module.exports = React.createClass({
    getInitialState: function() {
        return (localStorage.logged || sessionStorage.logged)? {
            logged: true,
            panelMessage: 'Use the same strings to login.',
            panelClass: "warning",
            transactions: []
        } :
            {
                logged: false,
                panelMessage: 'Use any two similar strings to login.',
                panelClass: "warning",
                transactions: []
            };
    },
    login: function() {
        var username = this.refs.un.value;
        var password = this.refs.pw.value;
        var userInfo = users.filter(function(user) {
            return user.username == username;
        });
        if(userInfo.length) {
            userInfo = userInfo[0];
            if(password == userInfo.password) {
                sessionStorage.setItem('logged', 'true');
                sessionStorage.setItem('username', username);
                sessionStorage.setItem('coinBaseAddress', userInfo.coinBaseAddress);
                sessionStorage.setItem('port', userInfo.port);
                sessionStorage.setItem('blocks', 0);
                sessionStorage.setItem('updateBlocks', 0);
                utils.watchAddEvent();
                utils.watchUpdateEvent();
                this.setState({
                    logged: true
                });
            } else {
                this.setState({
                    panel: true,
                    panelMessage: 'Wrong Password entered!',
                    panelClass: "panel panel-danger"
                });
            }
        } else {
            this.setState({
                panel: true,
                panelMessage: 'User doesnt exist!',
                panelClass: "panel panel-danger"
            });
        }
    },
    render: function() {
        var loginForm = forms.loginForm(this);
        var renderer = [];
        if(this.state.logged) {
            renderer.push(
                <div className='row middle-row' key="1">
                    <Panel message="Welcome to the Skip trace Consortium<br/>- Powered by Blockchain" type="success"/>
                </div>
            );
        } else {
            renderer.push(
                <div className='row middle-row' key="1">
                    <Panel message={this.state.panelMessage} type={this.state.panelClass}/>
                    <div className='row'>
                        <div className='col-md-5'>
                            <PanelCollapse target="login" message="Login"/>
                            <div id='login'>
                                {loginForm}
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
        return  (
            <div>
                <NavBar logged={sessionStorage.getItem('logged')} bank={sessionStorage.getItem('username')}/>
                <h3>Home</h3>
                {renderer}
                <Footer/>
            </div>
        );
    },
    componentDidMount: function() {
        if(this.state.logged) {
            utils.watchAddEvent();
            utils.watchUpdateEvent();
        }
    },
    componentWillUnmount() {
        utils.stopWatchingAddEvent();
        utils.stopWatchingUpdateEvent();
    }
});

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
    render: function() {
        var loginForm = forms.loginForm(this);
        return  (this.state.logged)? (
            <div>
                <NavBar logged={sessionStorage.getItem('logged')}/>
                <h3>Home</h3>
                <div className='row middle-row'>
                    <PanelCollapse message="Collection Efficiency" target="chart1"/>
                    <div id='chart1' className='dataTable collapse in'>
                        <img className='chart' src='/images/chart_1.png'/>
                    </div>
                    <PanelCollapse message="Consortium Efficiency" target="chart2"/>
                    <div id='chart2' className='dataTable collapse'>
                        <img className='chart' src='/images/chart_2.png'/>
                    </div>
                    <PanelCollapse message="Portfolio Ageing of Skip trace accounts as on Date" target="chart4"/>
                    <div id='chart4' className='dataTable collapse'>
                        <img className='chart' src='/images/chart_2.png'/>
                    </div>
                    <PanelCollapse message="Skip trace ageing month on month Analysis" target="chart5"/>
                    <div id='chart5' className='dataTable collapse'>
                        <img className='chart' src='/images/chart_3.png'/>
                    </div>
                    <PanelCollapse message="Quarterly Distribution of Skip trace customers consumed by more than one Bank" target="chart3"/>
                    <div id='chart3' className='dataTable collapse'>
                        <b>Percentage of Customers</b>
                        <div id='pie'></div>
                    </div>
                </div>
                <Footer/>
            </div>
        ) : (
            <div>
                <NavBar logged={sessionStorage.getItem('logged')}/>
                <h3>Home</h3>
                <div className='row middle-row'>
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
                <Footer/>
            </div>
        );
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
                utils.watchTransactionEvent(this);
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
    componentDidMount: function() {
        var chartData=[
        	{label:"Plus", color:"#DC3912", value: 6},
        	{label:"Lite", color:"#FF9900", value: 2},
        	{label:"Elite", color:"#109618", value: 2},
        ];
        var chartFunc = function(data){
            return data.map(function(d){
                return {label:d.label, value:d.value, color:d.color};
            });
        };
        var svg = d3.select("#pie").append("svg").attr("width", 300).attr("height",300);
        svg.append("g").attr("id","chartPie");
        Donut3D.draw("chartPie", chartFunc(chartData), 150, 150, 130, 100, 30, 0.4);
        if(sessionStorage.getItem('logged')) {
            utils.watchTransactionEvent(this);
            utils.watchAddEvent();
            utils.watchUpdateEvent();
        }
    }
});

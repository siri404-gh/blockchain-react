var React = require('react');
var NavBar = require('../../components/Navbar/Navbar');
var Footer = require('../../components/Footer/Footer');
var Panel = require('../../components/Panel/Panel');
var PanelCollapse = require('../../components/PanelCollapse/PanelCollapse');
module.exports = React.createClass({
    render: function() {
        return  (
            <div>
                <NavBar logged={sessionStorage.getItem('logged')} bank={sessionStorage.getItem('username')}/>
                <h3>Metrics</h3>
                <div className='row middle-row' key="1">
                    <PanelCollapse message="Collection Efficiency" target="chart1"/>
                    <div id='chart1' className='dataTable chartDiv collapse in'></div>
                    <PanelCollapse message="Consortium Efficiency" target="chart2"/>
                    <div id='chart2' className='dataTable chartDiv collapse'></div>
                    <PanelCollapse message="Collaboration Efficiency" target="chart3"/>
                    <div id='chart3' className='dataTable chartDiv collapse'></div>
                    <PanelCollapse message="Portfolio Ageing" target="chart4"/>
                    <div id='chart4' className='dataTable chartDiv collapse'></div>
                    <PanelCollapse message="Portfolio Age tracker" target="chart5"/>
                    <div id='chart5' className='dataTable chartDiv collapse'></div>
                </div>
                <Footer/>
            </div>
        );
    }
})

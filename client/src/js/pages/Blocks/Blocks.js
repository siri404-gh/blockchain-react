var React = require('react');
var NavBar = require('../../components/Navbar/Navbar');
var Footer = require('../../components/Footer/Footer');
var Panel = require('../../components/Panel/Panel');
var PanelCollapse = require('../../components/PanelCollapse/PanelCollapse');
var utils = require('../../utils/utils');
var moment = require('moment');
var Link = require('react-router').Link;

module.exports = React.createClass({
    getInitialState: function() {
        return {
            transactions: [<div key={Math.random()} className="loader"></div>]
        }
    },
    displayTransactions: function() {
        var transactions = [];
        var self = this;
        $.ajax({
            url: utils.api+'/blocks',
            method: 'GET',
            data: {
                port: sessionStorage.getItem('port'),
                coinBaseAddress: sessionStorage.getItem('coinBaseAddress')
            },
            success: function(res) {
                res.forEach(function(block, i) {
                    transactions.push(
                        <div className='row row-underline' key={i}>
                            <div className='col-xs-1'>
                                <Link to={'/block/'+block.id}>{block.id}</Link>
                            </div>
                            <div className='col-xs-2'>
                                {block.hash.substring(0,12) + '...'}
                            </div>
                            <div className='col-xs-1 difficulty-col'>
                                {block.difficulty}
                            </div>
                            <div className='col-xs-2 miner-col'>
                                {block.miner.substring(0,12) + '...'}
                            </div>
                            <div className='col-xs-2 gas-col'>
                                {block.gasUsed}
                            </div>
                            <div className='col-xs-3 time-col'>
                                {moment.unix(block.timestamp).format('DD-MM-YYYY hh:mm:ss')}
                            </div>
                            <div className='col-xs-1'>
                                {block.transactions}
                            </div>
                        </div>
                    );
                });
                 if (self.isMounted()) {
                    self.setState({
                        transactions: transactions
                    });
                }
            }
        });
    },
    render: function() {
        return (
            <div>
                <NavBar logged={sessionStorage.getItem('logged')} bank={sessionStorage.getItem('username')}/>
                <h3>Ethereum Blocks Browser</h3>
                <div className='row middle-row'>
                    <div className='col-md-12'>
                        <PanelCollapse message="Recent transactions" target="recent"/>
                        <div id='recent' className='recent-transactions dataTable collapse in'>
                            <div className="row row-underline">
                                <div className='col-xs-1'><b></b></div>
                                <div className='col-xs-2'><b>Hash</b></div>
                                <div className='col-xs-1 difficulty-col'><b>Difficulty</b></div>
                                <div className='col-xs-2 miner-col'><b>Miner</b></div>
                                <div className='col-xs-2 gas-col'><b>Gas Used</b></div>
                                <div className='col-xs-3 time-col'><b>Time</b></div>
                                <div className='col-xs-1'><b>#Tx</b></div>
                            </div>
                            {this.state.transactions}
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    },
    componentDidMount: function() {
        this.displayTransactions();
        utils.watchTransactionEvent(this);
        utils.watchAddEvent();
        utils.watchUpdateEvent();
    },
    componentDidUpdate: function() {
        $('.recent-transactions').hide();
        $('.recent-transactions').fadeIn();
    },
    componentWillUnmount: function() {
        utils.stopWatchTransactionEvent();
        utils.stopWatchingAddEvent();
        utils.stopWatchingUpdateEvent();
    }
});

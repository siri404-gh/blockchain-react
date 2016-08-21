var React = require('react');
var NavBar = require('../../components/Navbar/Navbar');
var Footer = require('../../components/Footer/Footer');
var Panel = require('../../components/Panel/Panel');
var PanelCollapse = require('../../components/PanelCollapse/PanelCollapse');
var utils = require('../../utils/utils');

module.exports = React.createClass({
    getInitialState: function() {
        return {
            title: '',
            hash: '',
            difficulty: '',
            miner: '',
            gasLimit: '',
            gasUsed: '',
            timestamp: '',
            size: '',
            extraData: '',
            stateRoot: '',
            nonce: '',
            transactionDetails: [<div key={Math.random()} className="loader"></div>]
        }
    },
    getAmount: function(value) {
        return utils.getAmount(value);
    },
    componentWillMount: function() {
        var self = this;
        var transactionDetails = [];
        var block = $.ajax({
            // async: false,
            url: 'http://localhost:3000/blocks/'+self.props.params.id,
            method: 'GET',
            data: {
                port: sessionStorage.getItem('port'),
                coinBaseAddress: sessionStorage.getItem('coinBaseAddress')
            },
            success: function(block) {
                block.transactions.forEach(function(txn, i) {
                    transactionDetails.push(
                        <div className='row row-underline' key={i}>
                            <div className='col-xs-1'>
                                {i+1}
                            </div>
                            <div className='col-xs-3'>
                                {txn.hash.substring(0,12) + '...'}
                            </div>
                            <div className='col-xs-3'>
                                { txn.from.substring(0,12)+'...'}
                            </div>
                            <div className='col-xs-3'>
                                {txn.to.substring(0,12)+'...'}
                            </div>
                            <div className='col-xs-2'>
                                {txn.value}
                            </div>
                        </div>
                    );
                });
                self.setState({
                    title: self.props.params.id,
                    hash: block.hash,
                    difficulty: block.difficulty,
                    miner: block.miner,
                    gasLimit: block.gasLimit,
                    gasUsed: block.gasUsed,
                    timestamp: block.timestamp,
                    size: block.size,
                    extraData: block.extraData,
                    stateRoot: block.stateRoot,
                    nonce: block.nonce,
                    transactionDetails: transactionDetails
                });
            }
        });

    },
    render: function() {
        return (
            <div>
                <NavBar logged={sessionStorage.getItem('logged')}/>
                <h3>Ethereum Block - <b>{this.props.params.id}</b></h3>
                <div className='row middle-row'>
                    <div className='col-md-10'>
                        <PanelCollapse target="block" message="Block Details"/>
                        <div id='block' className='dataTable collapse in'>
                            <div className="row row-underline">
                                <div className='col-xs-3'><b>Hash</b></div>
                                <div className='col-xs-9'>{this.state.hash}</div>
                            </div>
                            <div className="row row-underline">
                                <div className='col-xs-3'><b>Difficulty</b></div>
                                <div className='col-xs-9'>{this.state.difficulty}</div>
                            </div>
                            <div className="row row-underline">
                                <div className='col-xs-3'><b>Miner</b></div>
                                <div className='col-xs-9'>{this.state.miner}</div>
                            </div>
                            <div className="row row-underline">
                                <div className='col-xs-3'><b>Gas Limits</b></div>
                                <div className='col-xs-9'>{this.state.gasLimit}</div>
                            </div>
                            <div className="row row-underline">
                                <div className='col-xs-3'><b>Gas Used</b></div>
                                <div className='col-xs-9'>{this.state.gasUsed}</div>
                            </div>
                            <div className="row row-underline">
                                <div className='col-xs-3'><b>Timestamp</b></div>
                                <div className='col-xs-9'>{this.state.timestamp}</div>
                            </div>
                            <div className="row row-underline">
                                <div className='col-xs-3'><b>Size</b></div>
                                <div className='col-xs-9'>{this.state.size}</div>
                            </div>
                            <div className="row row-underline">
                                <div className='col-xs-3'><b>Extra Data</b></div>
                                <div className='col-xs-9'>{this.state.extraData}</div>
                            </div>
                            <div className="row row-underline">
                                <div className='col-xs-3'><b>State Root</b></div>
                                <div className='col-xs-9'>{this.state.stateRoot}</div>
                            </div>
                            <div className="row row-underline">
                                <div className='col-xs-3'><b>Nonce</b></div>
                                <div className='col-xs-9'>{this.state.nonce}</div>
                            </div>
                        </div>
                        <PanelCollapse target="transactions" message="Transactions"/>
                        <div id='transactions' className='dataTable collapse in'>
                            <div className="row row-underline">
                                <div className='col-xs-1'><b></b></div>
                                <div className='col-xs-3'><b>Hash</b></div>
                                <div className='col-xs-3'><b>From</b></div>
                                <div className='col-xs-3'><b>To</b></div>
                                <div className='col-xs-2'><b>Amount</b></div>
                            </div>
                            {this.state.transactionDetails}
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
});

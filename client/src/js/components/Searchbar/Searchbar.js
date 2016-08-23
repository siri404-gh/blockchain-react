var React = require('react');
var PanelCollapse = require('../../components/PanelCollapse/PanelCollapse');
module.exports = React.createClass({
    formSubmit: function(ev) {
        ev.preventDefault();
        var value = this.refs.search.value;
        this.refs.search.value = '';
        this.props.formSubmit(value);
    },
    render: function() {
        return (
            <form role="form" onSubmit={this.formSubmit} key={Math.random()}>
                <PanelCollapse message="Search" target="search"/>
                <div  id='search' className='collapse in'>
                    <div className='row'>
                        <div className="form-group col-md-6">
                            <div className="input-group">
                                <input type="text" className="form-control" placeholder="Search by Customer Id" ref="search"/>
                                <span className="input-group-btn">
                                    <button className="btn btn-default" type="button" onClick={this.formSubmit}><span className='glyphicon glyphicon-search'></span></button>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        )
    }
});

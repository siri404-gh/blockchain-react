var React = require('react');
module.exports = React.createClass({
    render: function() {
        var panelType = this.props.type || 'primary';
        var message = this.props.message || '';
        return (
            <div className='row'>
                <div className="panel-group col-md-12 collapse-panel" data-toggle="collapse" data-target={"#"+this.props.target}>
                    <div className={"panel panel-"+ panelType}>
                        <div className="panel-heading">
                            <b>{message}</b>
                             <i className="indicator glyphicon glyphicon-chevron-down pull-right"></i>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

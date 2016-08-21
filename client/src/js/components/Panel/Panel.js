var React = require('react');
module.exports = React.createClass({
    render: function() {
        var note = [];
        if(this.props.type == 'warning') {
            note.push(<b key={Math.random()}><u>Directions:</u> </b>);
        }
        return (
            <div className='row'>
                <div className="panel-group col-md-12">
                    <div className={"panel panel-"+this.props.type}>
                        <div className="panel-heading">
                            {note}{this.props.message}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});
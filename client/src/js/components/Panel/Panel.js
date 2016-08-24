var React = require('react');
module.exports = React.createClass({
    render: function() {
        var note = [];
        var panelMessageRender = [];
        if(this.props.type == 'warning') {
            note.push(<b key={Math.random()}><u>Directions:</u> </b>);
        }
        if(this.props.message) {
            var message = this.props.message;
            var messageArray = message.split('<br/>');
            messageArray.forEach(function(message, i) {
                if(message) {
                    if (i==0) {
                        panelMessageRender.push(
                            <span key={Math.random()}>{message}</span>
                        );
                    } else {
                        panelMessageRender.push(
                            <div key={Math.random()}>{message}</div>
                        );
                    }
                }
            });
        }
        if (this.props.size == "big") {
            panelMessageRender = [];
            message = this.props.message;
            messageArray = message.split('<br/>');
            messageArray.forEach(function(message, i) {
                if(message) {
                    if (i==0) {
                        panelMessageRender.push(
                            <span key={Math.random()}><h2>{message}</h2></span>
                        );
                    } else {
                        panelMessageRender.push(
                            <div className='align-right' key={Math.random()}><h2>{message}</h2></div>
                        );
                    }
                }
            });
        }
        return (
            <div className='row'>
                <div className="panel-group col-md-12">
                    <div className={"panel panel-"+this.props.type}>
                        <div className="panel-heading">
                            {note}{panelMessageRender}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

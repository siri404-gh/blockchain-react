var React = require('react');
module.exports = React.createClass({
    render: function() {
        return (
            <div className="form-group col-md-6">
                <div className="dropdown">
                    <button className="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown">Select <span className="caret"></span></button>
                    <ul className="dropdown-menu">
                        <li><a href="#" id='0' onClick={this.props.populate}>1</a></li>
                        <li><a href="#" id='1' onClick={this.props.populate}>2</a></li>
                        <li><a href="#" id='2' onClick={this.props.populate}>3</a></li>
                        <li><a href="#" id='3' onClick={this.props.populate}>4</a></li>
                        <li><a href="#" id='4' onClick={this.props.populate}>5</a></li>
                        <li><a href="#" id='5' onClick={this.props.populate}>6</a></li>
                        <li><a href="#" id='6' onClick={this.props.populate}>7</a></li>
                        <li><a href="#" id='7' onClick={this.props.populate}>8</a></li>
                        <li><a href="#" id='8' onClick={this.props.populate}>9</a></li>
                        <li><a href="#" id='9' onClick={this.props.populate}>10</a></li>
                    </ul>
                </div>
            </div>
        )
    }
});

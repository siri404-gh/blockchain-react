var React = require('react');
var Panel = require('../../components/Panel/Panel');
var PanelCollapse = require('../../components/PanelCollapse/PanelCollapse');
var Populator = require('../../components/Populator/Populator');
module.exports = {
    loginForm: function(self) {
        return [
            <form role="form" key='1' onSubmit={self.login}>
                <div className="form-group">
                    <label htmlFor="email">Username:</label>
                    <input type="text" className="form-control" ref="un" id="userName" placeholder="Username" required/>
                </div>
                <div className="form-group">
                    <label htmlFor="pwd">Password:</label>
                    <input type="password" className="form-control" ref="pw" id="pwd" placeholder="Password" required/>
                </div>
                <div className="form-group">
                    <button type="button" onClick={self.login} className="btn btn-default">Submit</button>
                    <button type="reset" id='reset-button' className="btn btn-default">Reset</button>
                </div>
            </form>
        ];
    }
}

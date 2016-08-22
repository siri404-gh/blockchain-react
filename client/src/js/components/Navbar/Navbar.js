var React = require('react');
var Link = require('react-router').Link;

module.exports = React.createClass({
    render: function() {
        return (this.props.logged)? (
            <div className='row'>
                <header className='col-md-12'>
                    <nav className="navbar navbar-default">
                      <div className="container-fluid">
                        <div className="navbar-header">
                          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                          </button>
                          <a className="navbar-brand" href="/"><img className='brand-img' src={'/images/'+sessionStorage.getItem('username')+'.png'}/></a>
                          <a className="navbar-brand" href="#">{sessionStorage.getItem('username')}</a>
                        </div>
                        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                          <ul className="nav navbar-nav navbar-right">
                            <li><Link to="/home"><span className='glyphicon glyphicon-home'></span> <span className='navbar-link-text'>Home</span></Link></li>
                            <li><Link to="/blocks"><span className='glyphicon glyphicon-th-list'></span> <span className='navbar-link-text'>Blocks</span></Link></li>
                            <li><Link to="/add"><span className='glyphicon glyphicon-plus'></span> <span className='navbar-link-text'>Add</span></Link></li>
                            <li><Link to="/view"><span className='glyphicon glyphicon-eye-open'></span> <span className='navbar-link-text'>View</span></Link></li>
                            <li><Link to="/update"><span className='glyphicon glyphicon-edit'></span> <span className='navbar-link-text'>Update</span></Link></li>
                            <li><Link to="/logout"><span className='glyphicon glyphicon-off'></span> <span className='navbar-link-text'>Logout</span></Link></li>
                          </ul>
                        </div>
                      </div>
                    </nav>
                </header>
            </div>
        ):
        (
            <div className='row'>
                <header className='col-md-12'>
                    <nav className="navbar navbar-default">
                      <div className="container-fluid">
                        <div className="navbar-header">
                          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                          </button>
                          <a className="navbar-brand" href="/"> <img className='brand-img' src='/images/favicon.png'/></a>
                        </div>
                        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                          <ul className="nav navbar-nav navbar-right">
                            <li><Link to="/home"><span className='glyphicon glyphicon-home'></span>  <span className='navbar-link-text'>Home</span></Link></li>
                          </ul>
                        </div>
                      </div>
                    </nav>
                </header>
            </div>
        );
    }
});

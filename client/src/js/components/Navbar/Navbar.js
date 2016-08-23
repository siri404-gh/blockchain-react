var React = require('react');
var Link = require('react-router').Link;

module.exports = React.createClass({
    render: function() {
        var logged = (this.props.logged === 'true')? true : false;
        var links = [];
        var bankName = 'favicon';
        var brandName = 'Skiptrace';
        if(logged) {
            bankName = this.props.bank;
            brandName = this.props.bank;
            links.push(<ul className="nav navbar-nav navbar-right" key="2">
                    <li><Link to="/home"><span className='glyphicon glyphicon-home'></span> <span className='navbar-link-text'>Home</span></Link></li>
                    <li><Link to="/blocks"><span className='glyphicon glyphicon-th-list'></span> <span className='navbar-link-text'>Blocks</span></Link></li>
                    <li><Link to="/add"><span className='glyphicon glyphicon-plus'></span> <span className='navbar-link-text'>Add</span></Link></li>
                    <li><Link to="/view"><span className='glyphicon glyphicon-eye-open'></span> <span className='navbar-link-text'>View</span></Link></li>
                    <li><Link to="/update"><span className='glyphicon glyphicon-edit'></span> <span className='navbar-link-text'>Update</span></Link></li>
                    <li><Link to="/metrics"><span className='glyphicon glyphicon-th-list'></span> <span className='navbar-link-text'>Metrics</span></Link></li>
                    <li><Link to="/logout"><span className='glyphicon glyphicon-off'></span> <span className='navbar-link-text'>Logout</span></Link></li>
                </ul>);
        }
        return (
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
                          <a className="navbar-brand" href="/"><img className='brand-img' src={'/images/'+bankName+'.png'}/></a>
                          <a className="navbar-brand" href="#">{[brandName.slice(0,1), '-', brandName.slice(1,2).toUpperCase(), brandName.slice(2, brandName.length)].join('')}</a>
                        </div>
                        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                            {links}
                        </div>
                      </div>
                    </nav>
                </header>
            </div>
        );
    }
});

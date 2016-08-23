var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;

var Master = require('./pages/Master/Master');
var Home = require('./pages/Home/Home');
var Add = require('./pages/Add/Add');
var View = require('./pages/View/View');
var Update = require('./pages/Update/Update');
var Blocks = require('./pages/Blocks/Blocks');
var Block = require('./pages/Block/Block');
var Metrics = require('./pages/Metrics/Metrics');
var Logout = require('./pages/Logout/Logout');

module.exports = (
    <Route>
        <Route handler={Master}>
            <DefaultRoute handler={Home} name="Home"/>
        </Route>
        <Route handler={Home} name="HomePage" path="/home*"/>
        <Route handler={Add} name="a" path="/add"/>
        <Route handler={View} name="b" path="/view"/>
        <Route handler={Update} name="c" path="/update"/>
        <Route handler={Blocks} name="d" path="/blocks"/>
        <Route handler={Logout} name="e" path="/logout"/>
        <Route handler={View} name="f" path="/view/:id"/>
        <Route handler={Block} name="g" path="/block/:id"/>
        <Route handler={Metrics} name="h" path="/metrics"/>
    </Route>
);

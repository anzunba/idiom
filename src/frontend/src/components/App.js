import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import { Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';

import Header from './layout/Header';
import Alerts from './layout/Alerts';
import Feed from './feed/Feed';
import Profile from './profile/Profile';
import Edit from './idiom/Edit';
import Create from './idiom/Create';

import Login from './accounts/Login';
import Register from './accounts/Register';
import PrivateRoute from './common/PrivateRoute';

import { Provider } from 'react-redux';
import store from '../store';
import { loadUser } from '../actions/auth';
import '../../static/frontend/css/style.css';

// Alert Options
const alertOptions = {
	timeout: 3000,
	position: 'top center'
};

const App = () => {
	return (
		<Provider store={store}>
			<AlertProvider template={AlertTemplate} {...alertOptions}>
				<Router>
					<Fragment>
						<Header />
						<Alerts />
						<div className="container">
							<Switch>
								<PrivateRoute exact path="/" component={Feed} />
								<Route exact path="/register" component={Register} />
								<Route exact path="/login" component={Login} />
								<PrivateRoute exact path="/profile" component={Profile} />
								<PrivateRoute exact path="/edit" component={Edit} />
								<PrivateRoute  exact path="/create" component={Create} />
							</Switch>
						</div>
					</Fragment>
				</Router>
			</AlertProvider>
		</Provider>
	);
};

ReactDOM.render(<App />, document.getElementById('app'));

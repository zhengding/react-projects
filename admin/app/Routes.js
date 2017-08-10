import React from 'react';

import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux';

import App from './containers/App';

import store from './Store';


const history = syncHistoryWithStore(browserHistory, store);

const Routes = () => (
	<Router history={history}>
		<Route path='/' component={App}/>
	</Router>
);

export default Routes;
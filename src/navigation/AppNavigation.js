import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ScrollToTop from '../components/ScrollToTop';
import Authentication from '../pages/Authentication/Authentication';
import HomeNavigation from './HomeNavigation';
import { sessionLogin } from '../store/actions/authAction';
import { useDispatch } from 'react-redux';

const AppNavigation = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		const userInfo = sessionStorage.getItem('userInfo');
		console.log('session get: ', userInfo);
		if (userInfo != null) {
			console.log('sessionLogin');
			dispatch(sessionLogin(JSON.parse(userInfo)));
		}
	}, []);

	return (
		<Router>
			<ScrollToTop />
			<Switch>
				<Route
					exact
					path="/authentication"
					component={Authentication}
				/>
				<Route path="/" component={HomeNavigation} />
			</Switch>
		</Router>
	);
};

export default AppNavigation;

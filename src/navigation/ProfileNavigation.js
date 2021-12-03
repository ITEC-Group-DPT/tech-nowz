import React, { useEffect } from 'react';
import { Switch, Route, Redirect, useRouteMatch, useLocation,useHistory } from 'react-router-dom';

import { validateApi } from '../api/authApi';
import { showAuthError } from '../store/actions/authAction';
import { useDispatch } from 'react-redux';

import Favorite from '../pages/Favorite/Favorite';
import OrderHistory from '../pages/OrderHistory/OrderHistory';
import AddressBook from '../pages/AddressBook/AddressBook';
import NotFound from '../components/NotFound/NotFound';
import OrderDetail from '../pages/OrderDetail/OrderDetail';
import AdminCreateNewProduct from '../pages/AdminCreateNewProduct/AdminCreateNewProduct';
import AdminEditProduct from '../pages/AdminEditProduct/AdminEditProduct';
const ProfileNavigation = () => {
	const match = useRouteMatch();
	const location = useLocation();
	const dispatch = useDispatch();
	const history = useHistory();

	useEffect(() => {
		validateApi().then(response => {
			console.log('response: ', response);
			if (!response.data.success) {
				dispatch(showAuthError());
				history.push("/error")

			}
		})
	}, [location])
	return (
		<Switch>
			<Route exact path={`${match.path}`}>
				<Redirect to={`${match.path}/orderhistory`} />
			</Route>
			<Route exact path={`${match.path}/favorite`} component={Favorite} />
			<Route
				exact
				path={`${match.path}/orderhistory`}
				component={OrderHistory}
			/>
			<Route
				exact
				path={`${match.path}/orderhistory/:id`}
				component={OrderDetail}
			/>
			<Route
				exact
				path={`${match.path}/addressbook`}
				component={AddressBook}
			/>
			<Route
				exact
				path={`${match.path}/createproduct`}
				component={AdminCreateNewProduct}
			/>
			<Route
				exact
				path={`${match.path}/editproduct`}
				component={AdminEditProduct}
			/>
			<Route path={`${match.path}`} component={NotFound} />
		</Switch>
	);
};

export default ProfileNavigation;

import React from 'react';
import { Route, Switch, Redirect, useRouteMatch } from 'react-router';
import Cart from '../pages/Cart/Cart';
import Payment from '../pages/Payment/Payment';
import NotFound from '../components/NotFound/NotFound';

const CartNavigation = () => {
	const match = useRouteMatch();
	return (
		<Switch>
			<Route exact path={`${match.path}`}>
				<Redirect to={`${match.path}/cart`} />
			</Route>
			<Route exact path={`${match.path}/cart`} component={Cart} />
			<Route exact path={`${match.path}/payment`} component={Payment} />
			<Route path={`${match.path}`} component={NotFound} />
		</Switch>
	);
};

export default CartNavigation;

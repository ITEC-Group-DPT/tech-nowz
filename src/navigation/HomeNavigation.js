import React, { useEffect } from 'react';
import { Switch, Route,useHistory } from 'react-router-dom';

//component
import Navbar from '../components/Navbar/Navbar';
import Product from '../pages/Product/Product';
import CategoryPage from '../pages/CategoryPage/CategoryPage'
import ContactUs from '../pages/ContactUs/ContactUs';
import CartNavigation from './CartNavigation';
import ProfileNavigation from './ProfileNavigation';
import Home from '../pages/Home/Home';
import NotFound from '../components/NotFound/NotFound';
import UpperNav from '../components/UpperNav/UpperNav';
import Footer from '../components/Footer/Footer';
import CustomModal from '../components/Modal/Modal';

//redux & api
import { useDispatch, useSelector } from "react-redux"
import {
	getTopRatingAction,
	getLaptopAction,
	getMonitorAction,
	getCPUAction,
} from "../store/actions/productAction"

import { authErrorSelector } from "../store/selectors"
import { showAuthError, logOut } from "../store/actions/authAction"

const HomeNavigation = () => {

	const dispatch = useDispatch();
	const history = useHistory();
	const { tokenError } = useSelector(authErrorSelector)

	useEffect(() => {
		dispatch(getTopRatingAction());
		dispatch(getLaptopAction());
		dispatch(getMonitorAction());
		dispatch(getCPUAction());
	}, [])
	return (
		<div>
			<Route exact path="/" component={UpperNav} />
			<Navbar />
			{
				tokenError &&
				<CustomModal
					openModal={true}
					noCancel

					title={"Alert"}
					description={tokenError}

					onPressCancel={() => { }}
					onPressConfirm={() => {
						dispatch(logOut(history));
					}}
				/>
			}
			<Switch>
				<Route exact path="/contactus" component={ContactUs} />
				<Route exact path="/" component={Home} />
				<Route path="/product/:name" component={Product} />
				<Route path="/category/:name" component={CategoryPage} />
				<Route path="/checkout" component={CartNavigation} />
				<Route path="/profile" component={ProfileNavigation} />
				
				<Route path="/" component={NotFound} />
			</Switch>
			<Footer />
		</div>
	);
};

export default HomeNavigation;

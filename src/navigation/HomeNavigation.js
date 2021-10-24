import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import Product from '../pages/Product/Product';
import ContactUs from '../pages/ContactUs/ContactUs';
import CartNavigation from './CartNavigation';
import ProfileNavigation from './ProfileNavigation';
import Home from '../pages/Home/Home';
import NotFound from '../components/NotFound/NotFound';
import UpperNav from '../components/UpperNav/UpperNav';
import Footer from '../components/Footer/Footer';

const HomeNavigation = () => {
	return (
		<div>
			<Route exact path="/" component={UpperNav} />
			<Navbar />
			<Switch>
				<Route exact path="/contactus" component={ContactUs} />
				<Route exact path="/" component={Home} />
				<Route path="/product/:name" component={Product} />
				<Route path="/checkout" component={CartNavigation} />
				<Route path="/profile" component={ProfileNavigation} />
				<Route path="/" component={NotFound} />
			</Switch>
			<Footer />
		</div>
	);
};

export default HomeNavigation;

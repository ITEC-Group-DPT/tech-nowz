import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ScrollToTop from '../components/ScrollToTop';
import Authentication from '../pages/Authentication/Authentication';
import HomeNavigation from './HomeNavigation';
import { sessionLogin } from '../store/actions/authAction';

import { useDispatch, useSelector } from 'react-redux';
import { getCart } from '../store/actions/cartAction';
import { decryptData } from "../constant/utils"
import { updateUserVisitAPI } from '../api/authApi';
const AppNavigation = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        const userInfo = sessionStorage.getItem("userInfo");
        if (userInfo != null) {
            console.log('sessionLogin');

            let data = decryptData(userInfo);

            try {
                let userObject = JSON.parse(data);

                if (userObject["userID"]) {
                    dispatch(sessionLogin(userObject));
                    dispatch(getCart());
                }
            } catch (error) {
                sessionStorage.clear();

            }
        }
        updateUserVisitAPI();
    }, [])

    return (
        <Router>
            <ScrollToTop />
            <Switch>
                <Route exact path='/authentication' component={Authentication} />
                <Route path='/' component={HomeNavigation} />
            </Switch>
        </Router>
    )
}

export default AppNavigation;

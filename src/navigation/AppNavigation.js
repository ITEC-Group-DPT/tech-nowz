import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import axios from 'axios';
import ScrollToTop from '../components/ScrollToTop';
import Authentication from '../pages/Authentication/Authentication';
import HomeNavigation from './HomeNavigation';
import { sessionLogin } from '../store/actions/authAction';

import { userInfoSelector } from '../store/selectors'
import { useDispatch, useSelector } from 'react-redux';

const AppNavigation = () => {

    const { userID } = useSelector(state => userInfoSelector(state));

    console.log('userID: ', userID);
    if (userID != undefined) {
        axios.defaults.headers.post['Userid'] = userID;
    }

    const dispatch = useDispatch();
    const userInfo = sessionStorage.getItem("userInfo");

    if (userInfo != null)
        dispatch(sessionLogin(JSON.parse(userInfo)));
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

export default AppNavigation

import React,{useEffect} from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import axios from 'axios';
import ScrollToTop from '../components/ScrollToTop';
import Authentication from '../pages/Authentication/Authentication';
import HomeNavigation from './HomeNavigation';
import { sessionLogin } from '../store/actions/authAction';

import { userInfoSelector } from '../store/selectors'
import { useDispatch, useSelector } from 'react-redux';

const AppNavigation = () => {
    //axios.defaults.headers['Userid'] = 69;
    const { userID } = useSelector(state => userInfoSelector(state));

    const dispatch = useDispatch();
    console.log('userID: ', userID);

    if (userID != undefined) {
        console.log('axios header: ', userID);
        axios.defaults.headers['Userid'] = userID;
        console.log('axios: ',axios.defaults.headers);
    }

    useEffect(() => {
        const userInfo = sessionStorage.getItem("userInfo");
        console.log('session get: ', userInfo);
        if (userInfo != null) {
            console.log('sessionLogin');
            dispatch(sessionLogin(JSON.parse(userInfo)));

        }
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

export default AppNavigation

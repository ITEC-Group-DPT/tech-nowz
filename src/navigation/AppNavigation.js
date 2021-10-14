import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import ScrollToTop from '../components/ScrollToTop';
import Authentication from '../pages/Authentication/Authentication';
import HomeNavigation from './HomeNavigation';

const AppNavigation = () => {
    return (
        <Router>
            <ScrollToTop/>
            <Switch>
                <Route exact path='/authentication' component={Authentication} />
                <Route path='/' component={HomeNavigation} />
            </Switch>
        </Router>
    )
}

export default AppNavigation

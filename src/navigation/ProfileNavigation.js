import React from 'react'
import { Switch, Route, Redirect, useRouteMatch } from 'react-router-dom'

import Favorite from '../pages/Favorite/Favorite';
import OrderHistory from '../pages/OrderHistory/OrderHistory';
import AddressBook from '../pages/AddressBook/AddressBook';
import NotFound from '../components/NotFound/NotFound';
import OrderDetail from '../pages/OrderDetail/OrderDetail';

const ProfileNavigation = () => {
    const match = useRouteMatch()
    return (
        <Switch>
            <Route exact path={`${match.path}`}>
                <Redirect to={`${match.path}/orderhistory`} />
            </Route>
            <Route exact path={`${match.path}/favorite`} component={Favorite} />
            <Route exact path={`${match.path}/orderhistory`} component={OrderHistory} />
            <Route exact path={`${match.path}/orderhistory/:id`} component={OrderDetail}/>
            <Route exact path={`${match.path}/addressbook`} component={AddressBook} />

            <Route path={`${match.path}`} component={NotFound}/>
        </Switch>
    )
}

export default ProfileNavigation

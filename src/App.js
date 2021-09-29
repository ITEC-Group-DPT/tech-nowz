import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Authentication from './pages/Authentication/Authentication';
import HomeNavigation from './navigation/HomeNavigation';


const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/authentication' component={Authentication}/>
        <Route path='/' component={HomeNavigation}/>
      </Switch>
    </Router>
  );
}

export default App;

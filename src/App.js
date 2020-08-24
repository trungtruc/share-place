import React from 'react';
import './App.css';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Users from './user/pages/Users';
import NewPlace from './places/pages/NewPlace';
import MainNavigation from './shared/components/Navigation/MainNavigation';
import UserPlaces from './places/pages/UserPlaces';


function App() {
  return (
    <Router>
      <MainNavigation />
      <main>
        <Switch>
          <Route exact path='/' component={Users} />
          <Route exact path='/places/new'>
            <NewPlace />
          </Route>
          <Route path='/:userId/places' exact>
            <UserPlaces />
          </Route>  
        </Switch>
      </main>
    </Router>
  );
}

export default App;

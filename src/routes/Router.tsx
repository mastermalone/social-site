import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LandingPage from '../pages/landingPage';
import LoginPage from '../pages/LoginPage';
import NewsFeed from '../pages/newsFeed';

const Routes: React.FC = () => {

  return (
    <Switch>
      <Route exact path="/social" component={LandingPage} />
      <Route exact path="/news" component={NewsFeed} />
      <Route exact path='/' component={LoginPage} />
      <Route />
      <Route />
    </Switch>
  )
}

export default Routes;

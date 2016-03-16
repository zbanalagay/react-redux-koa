import React from 'react';
import { Route, IndexRoute, Redirect } from 'react-router';

import LandingView from './../containers/Landing/LandingView.jsx';
import CoreLayout from '../layouts/CoreLayout';

import counterRoutes from './counterRoutes.jsx';

export default (
  <Route path="/" component= { CoreLayout } >
    <IndexRoute component={ LandingView } />
    { counterRoutes }
    <Redirect from="*" to="/" />

  </Route>
);

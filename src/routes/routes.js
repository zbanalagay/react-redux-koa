import React from 'react';
import { Route, IndexRoute, Redirect } from 'react-router';

import CounterView from '../containers/Counter/counterView';
import HelloRoutes from '../containers/Hello/HelloRoutes';
import CoreLayout from '../layouts/CoreLayout';

export default (
  <Route path="/" component= { CoreLayout } >
    <IndexRoute component={ CounterView } />
    <Route path="/hello" component={ HelloRoutes } />
    <Redirect from="*" to="/" />

  </Route>
);

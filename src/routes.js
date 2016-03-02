import React from 'react';
import { Route, IndexRoute, Redirect } from 'react-router';

import CounterView from './views/components/counterView';
import HelloRoutes from './views/components/HelloRoutes';
import CoreLayout from './views/layouts/coreLayout';

export default (
  <Route path="/" component= { CoreLayout } >
    <IndexRoute component={ CounterView } />
    <Route path="/hello" component={ HelloRoutes } />
    <Redirect from="*" to="/" />

  </Route>
);

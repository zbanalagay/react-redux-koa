import React from 'react';
import { Route, IndexRoute } from 'react-router';

import HelloRouting from './../containers/Hello/HelloRoutes.jsx';
import CounterView from './../containers/Counter/counterView.jsx';
import CounterLayout from './../layouts/CounterLayout.jsx';

export default (
  <Route path="counter" component={ CounterLayout } >
    <IndexRoute component={ CounterView } />
    <Route path="hello" component={ HelloRouting } />
  </Route>
);

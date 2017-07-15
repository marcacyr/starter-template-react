import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './App';

export const getRoutes = (store) => (
  <Route path='/' component={App}>
    <IndexRoute component={App} />
  </Route>
);

import React from 'react';
import { Router, IndexRoute, Route, browserHistory } from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
injectTapEventPlugin();

import App from '../../ui/App.jsx';
import Root from '../../ui/Root.jsx';

export const renderRoutes = () => (
  <MuiThemeProvider>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Root}/>

      </Route>
    </Router>
  </MuiThemeProvider>
);

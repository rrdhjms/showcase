import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Showcase from './layouts/Showcase';
import './assets/scss/paper-dashboard.scss';
import { Router, Switch, Route, Redirect } from 'react-router-dom';
import { createBrowserHistory } from 'history';

const hist = createBrowserHistory();

ReactDOM.render(
  <React.StrictMode>
    <Router history={hist}>
      <Switch>
        <Route path="/showcase" component={Showcase} />
        <Redirect to="/showcase" />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

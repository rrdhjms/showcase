import React from 'react';
import { Container } from 'reactstrap';
import { Route, Switch } from 'react-router-dom';
import styles from './App.module.css';
import TopNav from 'components/Navbar/TopNav';
import routes from '../routes';

function Showcase() {
  return (
    <div className={`wrapper ${styles.app}`}>
      <div className="main-content-panel">
        <TopNav />
        <div className="content content-navbar-lg">
          <Switch>
            {routes.map((prop, key) => {
              return (
                <Route
                  path={`${prop.layout}/${prop.path}`}
                  component={prop.component}
                  key={key}
                />
              );
            })}
          </Switch>
        </div>
        <footer className="footer">
          <Container>footer</Container>
        </footer>
      </div>
    </div>
  );
}

export default Showcase;

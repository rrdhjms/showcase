import React from 'react';
import { Container } from 'reactstrap';
import { Route, Switch } from 'react-router-dom';
import styles from './App.module.css';
import routes, { breadcrumbs } from '../routes';
import TopNav from 'components/Navbar/TopNav';

function Showcase() {
  return (
    <div className={`wrapper ${styles.app}`}>
      <TopNav />
      <div className="main-content-panel">
        <div className="content content-navbar-lg">
          <Switch>
            {routes.map((prop, key) => {
              return (
                <Route
                  exact
                  path={prop.path}
                  key={key}
                  render={(props) => {
                    return (
                      <prop.Component
                        {...props}
                        crumbs={breadcrumbs(props)}
                        info={prop}
                      />
                    );
                  }}
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

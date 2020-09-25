import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import styles from './App.module.css';
import routes, { breadcrumbs } from '../routes';
import TopNav from 'components/Navbar/TopNav';
import Footer from 'components/Footer/Footer';

function Showcase() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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
        <Footer />
      </div>
    </div>
  );
}

export default Showcase;

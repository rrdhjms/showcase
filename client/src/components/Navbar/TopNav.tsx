import React from 'react';
import { Navbar, Container, NavbarBrand } from 'reactstrap';
import styles from './TopNav.module.css';

function TopNav() {
  return (
    <Navbar expand="lg" className={styles.topNav}>
      <Container fluid>
        <div className="navbar-wrapper">
          <NavbarBrand href="/showcase">
            <i className="fas fa-code" /> Showcase
          </NavbarBrand>
        </div>
      </Container>
    </Navbar>
  );
}

export default TopNav;

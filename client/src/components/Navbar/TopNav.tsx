import React from 'react';
import { Navbar, Container, NavbarBrand } from 'reactstrap';
import styles from './TopNav.module.css';

export default function TopNav() {
  return (
    <Navbar expand="lg" className="navbar-absolute fixed-top">
      <Container fluid className={styles.topnav}>
        <div className="navbar-wrapper">
          <NavbarBrand
            href="/"
            style={{ color: '#252422', fontSize: '2.5em' }}
            className={styles.navbarbrand}
          >
            <i className="fas fa-code" /> Showcase
          </NavbarBrand>
        </div>
      </Container>
    </Navbar>
  );
}

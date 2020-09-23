import React from 'react';
import { Navbar, Container, NavbarBrand } from 'reactstrap';

type Props = {
  imagePath: string;
  title: string;
};

const HeaderLg = ({ imagePath, title }: Props) => {
  return (
    <Navbar expand="lg" className={`navbar-lg`} style={{ width: '100%' }}>
      <Container fluid style={{ justifyContent: 'space-evenly' }}>
        <div className="navbar-wrapper">
          <NavbarBrand
            style={{
              color: '#252422',
              fontSize: '2.5em',
              fontWeight: 'bolder',
            }}
          >
            {title}
          </NavbarBrand>
        </div>
        <div style={{ paddingRight: '0vw' }}>
          <img style={{ height: '30vh' }} src={imagePath} alt="page header" />
        </div>
      </Container>
    </Navbar>
  );
};
//https://icons8.com/vector-creator/illustration/5f69cf8e01d0360015a1d17d

export default HeaderLg;

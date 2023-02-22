import React from 'react';
import { Container, Title, AppBar } from './Navbar-styles';
import { NavbarAll } from './NavbarAll';

const Navbar = () => {
  return (
    <Container>
      <AppBar>
        <Title>Aguila Performance</Title>
        <NavbarAll />
      </AppBar>
    </Container>
  );
};

export default Navbar;

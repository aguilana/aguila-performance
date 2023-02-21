import React from 'react';
import {
  Container,
  Title,
  AppBar,
  Ul,
  ListItem,
  NavLink,
} from './Navbar-styles';

const Navbar = () => {
  return (
    <Container>
      <AppBar>
        <Title>Aguila Performance</Title>
        <Ul>
          <ListItem>
            <NavLink to='#'>Home</NavLink>
          </ListItem>
          <ListItem>
            <NavLink to='#'>Coaches</NavLink>
          </ListItem>
          <ListItem>
            <NavLink>AP Process</NavLink>
          </ListItem>
          <ListItem>
            <NavLink to='#'>Performance Plans</NavLink>
          </ListItem>
          <ListItem>
            <NavLink to='#'>Testimonials</NavLink>
          </ListItem>
          <ListItem>
            <NavLink to='#'>Contact</NavLink>
          </ListItem>
          <ListItem>
            <NavLink to='#'>Login</NavLink>
          </ListItem>
        </Ul>
      </AppBar>
    </Container>
  );
};

export default Navbar;

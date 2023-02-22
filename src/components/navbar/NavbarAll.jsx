import React from 'react';
import {
  NavMenuUl,
  NavItem,
  NavLink,
  DropdownMenu,
  DropdownItem,
  DropdownLink,
  NavItemWithDropdown,
} from './Navbar-styles';
import LoginIcon from '@mui/icons-material/Login';
import './navbar.css';

export const NavbarAll = () => {
  return (
    <NavMenuUl>
      <NavItem>
        <NavLink to='/'>Home</NavLink>
      </NavItem>
      <NavItem>
        <NavLink to='/coaches'>Coaches</NavLink>
      </NavItem>
      <NavItem>
        <NavLink to='/the-ap-process'>AP Process</NavLink>
      </NavItem>

      <NavItemWithDropdown>
        <NavLink to='/performance-plans'>Performance Plans</NavLink>

        <DropdownMenu>
          <DropdownItem>
            <DropdownLink>Option 1</DropdownLink>
          </DropdownItem>
          <DropdownItem>
            <DropdownLink>Option 2</DropdownLink>
          </DropdownItem>
          <DropdownItem>
            <DropdownLink>Option 3</DropdownLink>
          </DropdownItem>
        </DropdownMenu>
      </NavItemWithDropdown>

      <NavItem>
        <NavLink to='/testimonials'>Testimonials</NavLink>
      </NavItem>
      <NavItem>
        <NavLink to='/contact'>Contact</NavLink>
      </NavItem>
      <NavItem>
        <NavLink to='/login'>
          {' '}
          <LoginIcon />
          Login
        </NavLink>
      </NavItem>
    </NavMenuUl>
  );
};

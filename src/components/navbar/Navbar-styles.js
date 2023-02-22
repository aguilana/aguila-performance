import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.nav`
  width: 100%;
  height: 100px;
  background: #f5f5f5;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 10px;
`;

export const Title = styled.h4`
  color: black;
  font-size: 1.5em;
  font-weight: 700;
  margin: 0;
  padding: 5px 10px;
`;

export const AppBar = styled.div`
  width: 100%;
  height: 100%;
  padding: 5px 10px;
  background: #f5f5f5;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NavMenuUl = styled.ul`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  list-style: none;
  flex: 1;
  margin: 0;
  padding: 1em 2em;
`;

export const NavItem = styled.li`
  list-style: none;
  text-decoration: none;
  color: black;
  font-size: 1em;
  font-weight: 700;
  cursor: pointer;
  &:hover {
    color: #2ecc71;
  }
`;

export const NavLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: black;
  padding: 0.5em 1em;
  &:hover {
    color: gray;
  }
`;

export const DropdownMenu = styled.ul`
  position: absolute;
  top: 100%;
  display: block;
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const DropdownItem = styled.li`
  background-color: #000;
  padding: 10px;
  margin: 0;
`;

export const DropdownLink = styled(Link)`
  color: black;
  text-decoration: none;
  font-size: 14px;
  font-weight: 400;
`;

export const NavItemWithDropdown = styled(NavItem)`
  &:hover ${DropdownMenu} {
    display: block;
  }
`;

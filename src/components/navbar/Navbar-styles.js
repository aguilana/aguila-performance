import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.nav`
  width: 100%;
  height: 100px;
  background: #f5f5f5;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid #2ecc71;
  color: rgba(46, 204, 113, 0.8);
  margin: 0 1em;
  padding: 0.25em 1em;
  font-size: 1em;
  cursor: pointer;
  &:hover {
    background: #2ecc71;
    color: white;
  }
`;

export const Title = styled.h4`
  color: black;
  font-size: 1.5em;
  font-weight: 700;
`;

export const AppBar = styled.div`
  width: 100%;
  height: 100%;
  background: #f5f5f5;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Ul = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  flex: 1;
  padding: 0 2em;
`;

export const ListItem = styled.li`
  padding: 0 1em;
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
  text-decoration: none;
  color: black;
  &:hover {
    color: gray;
  }
`;

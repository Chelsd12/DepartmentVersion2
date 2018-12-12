import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Navbar = () => (
    <nav>
        <StyledButton>
        <NavLink exact activeStyle={styles.active} to="/">Home</NavLink>
        <NavLink exact activeStyle={styles.active} to="/About">About</NavLink>
        <NavLink exact activeStyle={styles.active} to="/Departments">Departments</NavLink>
        </StyledButton>
    </nav>
);//end of const Navbar

const StyledButton = styled.div`
  display: flex;
  padding: 15px 25px;
  justify-content: center;
  cursor: pointer;
  transition: background 0.2s ease;

  &:hover {
    background: #606060;
    transition: background 0.2s ease;
  }
`;

const styles = {
    active: {
        textDecoration: "none",
        fontWeight: "bold",
        color: "black"
    }//end of active
};//end of const styles

export default Navbar;
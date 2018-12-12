import React from 'react';
import { NavLink } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';
import styled from 'styled-components';

const Navbar = () => (
    <Menu>
        {/* <StyledButton> */}
        <Menu.Item>
            <NavLink exact activeStyle={styles.active} to="/">Home</NavLink>
        </Menu.Item>
        <Menu.Item>
            <NavLink exact activeStyle={styles.active} to="/About">About</NavLink>
        </Menu.Item>
        <Menu.Item>
            <NavLink exact activeStyle={styles.active} to="/Departments">Departments</NavLink>
        </Menu.Item>
        {/* </StyledButton> */}
    </Menu>
);//end of const Navbar

// const StyledButton = styled.div`
//   display: flex;
//   padding: 15px 25px;
//   justify-content: center;
//   cursor: pointer;
//   transition: background 0.2s ease;

//   &:hover {
//     background: #606060;
//     transition: background 0.2s ease;
//   }
// `;

const styles = {
    active: {
        fontWeight: "bold",
        color: "purple"
    }//end of active
};//end of const styles

export default Navbar;
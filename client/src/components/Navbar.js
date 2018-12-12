import React from 'react';
import { NavLink } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';
import styled from 'styled-components';

const Navbar = () => (
    <Menu>
        <Menu.Item>
            <NavLink exact activeStyle={styles.active} to="/">Home</NavLink>
        </Menu.Item>
        <Menu.Item>
            <NavLink exact activeStyle={styles.active} to="/Departments">Departments</NavLink>
        </Menu.Item>
    </Menu>
);//end of const Navbar

const styles = {
    active: {
        fontWeight: "bold",
        color: "purple"
    }//end of active
};//end of const styles

export default Navbar;
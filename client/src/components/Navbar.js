import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
    <nav>
        <NavLink exact activeStyle={styles.active} to="/">Home</NavLink>
        <NavLink exact activeStyle={styles.active} to="/About">About</NavLink>
        <NavLink exact activeStyle={styles.active} to="/Departments">Departments</NavLink>
    </nav>
);//end of const Navbar

const styles = {
    active: {
        textDecoration: "none",
        fontWeight: "bold",
        color: "blue"
    }//end of active
};//end of const styles

export default Navbar;
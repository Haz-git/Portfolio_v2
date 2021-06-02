import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import { NavbarLink } from './Navbar';

const Sidebar = () => {
    return (
        <Menu>
            <NavbarLink to="projectcontainer" smooth={true}>
                Test
            </NavbarLink>
        </Menu>
    );
};

export default Sidebar;

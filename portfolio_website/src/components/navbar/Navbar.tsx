import React from 'react';
import styled from 'styled-components';

//Styles:
const NavbarContainer = styled.nav`
    background: salmon;
`;

const NavbarLogoContainer = styled.div``;

const NavbarLinksContainer = styled.div``;

const NavbarSocialMediaContainer = styled.div``;

const NavbarLinkContainer = styled.div``;

const NavbarLink = styled.button``;

const Navbar = () => {
    return (
        <NavbarContainer>
            <NavbarLogoContainer>
                <div>LOGO HERE</div>
            </NavbarLogoContainer>
            <NavbarLinksContainer>
                <NavbarLinkContainer>
                    <NavbarLink>Projects</NavbarLink>
                </NavbarLinkContainer>
                <NavbarLinkContainer>
                    <NavbarLink>About</NavbarLink>
                </NavbarLinkContainer>
                <NavbarLinkContainer>
                    <NavbarLink>Contact</NavbarLink>
                </NavbarLinkContainer>
            </NavbarLinksContainer>
            <NavbarSocialMediaContainer>
                <div>Twitter</div>
                <div>Github</div>
                <div>LinkedIn</div>
            </NavbarSocialMediaContainer>
        </NavbarContainer>
    );
};

export default Navbar;

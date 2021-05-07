import React from 'react';
import styled from 'styled-components';

//Icons:
import { TwitterSquare } from '@styled-icons/fa-brands/TwitterSquare';
import { GithubSquare } from '@styled-icons/fa-brands/GithubSquare';
import { Linkedin } from '@styled-icons/fa-brands/Linkedin';

const TwitterIcon = styled(TwitterSquare)`
    height: 2rem;
    width: 2rem;
    color: rgba(255, 255, 255, 1);
`;

const GithubIcon = styled(GithubSquare)`
    height: 2rem;
    width: 2rem;
    color: rgba(255, 255, 255, 1);
`;

const LinkedinIcon = styled(Linkedin)`
    height: 2rem;
    width: 2rem;
    color: rgba(255, 255, 255, 1);
`;

//Styles:
const NavbarContainer = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: salmon;
`;

const NavbarLogoContainer = styled.div``;

const NavbarLinksContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const NavbarSocialMediaContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const NavbarSocialMediaIconWrapper = styled.div``;

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
                <NavbarSocialMediaIconWrapper>
                    <TwitterIcon />
                </NavbarSocialMediaIconWrapper>
                <NavbarSocialMediaIconWrapper>
                    <GithubIcon />
                </NavbarSocialMediaIconWrapper>
                <NavbarSocialMediaIconWrapper>
                    <LinkedinIcon />
                </NavbarSocialMediaIconWrapper>
            </NavbarSocialMediaContainer>
        </NavbarContainer>
    );
};

export default Navbar;

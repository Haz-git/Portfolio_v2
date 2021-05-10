import React from 'react';
import styled from 'styled-components';
import { deviceMax, deviceMin } from '../../devices/breakpoints';

//Logo:
import navLogo from '../../imgs/logo1.png';

//Icons:
import { Menu } from '@styled-icons/ionicons-solid/Menu';
import { TwitterSquare } from '@styled-icons/fa-brands/TwitterSquare';
import { GithubSquare } from '@styled-icons/fa-brands/GithubSquare';
import { Linkedin } from '@styled-icons/fa-brands/Linkedin';

const MenuIcon = styled(Menu)`
    height: 2.2rem;
    width: 2.2rem;
    color: #fdbc3d;
    box-shadow: rgba(0, 0, 0, 1) 0px 5px 5px;
`;

const TwitterIcon = styled(TwitterSquare)`
    height: 2.2rem;
    width: 2.2rem;
    color: rgba(255, 255, 255, 1);
    box-shadow: rgba(0, 0, 0, 1) 0px 5px 5px;
`;

const GithubIcon = styled(GithubSquare)`
    height: 2.2rem;
    width: 2.2rem;
    color: rgba(255, 255, 255, 1);
    box-shadow: rgba(0, 0, 0, 1) 0px 5px 5px;
`;

const LinkedinIcon = styled(Linkedin)`
    height: 2.2rem;
    width: 2.2rem;
    color: rgba(255, 255, 255, 1);
    box-shadow: rgba(0, 0, 0, 1) 0px 5px 5px;
`;

//Styles:
const NavbarContainer = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: inherit;
    padding: 1.5em 15%;
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

const NavbarSocialMediaIconWrapper = styled.div`
    margin: 0 0.2em;
`;

const NavbarLinkContainer = styled.div`
    padding: 0;
    margin: 0 3em;
`;

const NavbarLink = styled.button`
    font-family: 'Nunito', sans-serif;
    font-size: 1.2em;
    color: rgba(255, 255, 255, 1);
    font-weight: 700;
    background: none;
    border: none;
    text-shadow: rgba(0, 0, 0, 1) 0px 3px 3px;

    @media ${deviceMax.mobileL} {
        display: none;
    }
`;

const NavbarLogo = styled.img`
    object-fit: fill;
    height: 2.6rem;
`;

const BurgerMenuContainer = styled.button`
    margin: 0 1em;
    background: inherit;
    border: none;
    cursor: pointer;

    @media ${deviceMin.mobileL} {
        display: none;
    }
`;

const Navbar = () => {
    return (
        <NavbarContainer>
            <NavbarLogoContainer>
                <NavbarLogo src={navLogo} />
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
                <BurgerMenuContainer>
                    <MenuIcon />
                </BurgerMenuContainer>
            </NavbarSocialMediaContainer>
        </NavbarContainer>
    );
};

export default Navbar;

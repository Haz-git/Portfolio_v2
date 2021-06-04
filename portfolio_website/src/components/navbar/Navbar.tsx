import React from 'react';
import styled from 'styled-components';
import { deviceMax, deviceMin } from '../../devices/breakpoints';
import { Link } from 'react-scroll';

//Components:
import { slide as Sidebar } from 'react-burger-menu';

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
    justify-content: center;
    background: #010d1a;
    padding: 1.5em 15%;
    position: sticky;
    top: 0;

    @media ${deviceMin.mobileS} {
        padding: 0.5em 1em;
        justify-content: space-between;
    }

    @media ${deviceMin.tablet} {
        padding: 1.5em 10%;
        justify-content: center;
    }

    @media ${deviceMin.laptopS} {
        padding: 1.5em 10%;
        justify-content: space-evenly;
    }

    @media ${deviceMin.laptopS} {
        padding: 1.5em 10%;
        justify-content: space-evenly;
    }
`;

const NavbarLogoContainer = styled.div``;

const NavbarLinksContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    @media ${deviceMin.mobileS} {
        display: none;
    }

    @media ${deviceMin.tablet} {
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;

const NavbarSocialMediaContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    @media ${deviceMin.mobileS} {
        justify-content: start;
        align-items: center;
    }

    @media ${deviceMin.tablet} {
        justify-content: center;
    }
`;

const NavbarSocialMediaIconWrapper = styled.a`
    text-decoration: none;
    margin: 0 0.2em;
`;

const NavbarLinkContainer = styled.div`
    padding: 0;
    margin: 0 3em;
`;

export const NavbarLink = styled(Link)`
    font-family: 'Nunito', sans-serif;
    font-size: 1.2em;
    color: rgba(255, 255, 255, 1);
    font-weight: 700;
    background: none;
    border: none;
    text-shadow: rgba(0, 0, 0, 1) 0px 3px 3px;
    cursor: pointer;
    transition: all 0.2s linear;

    &:hover {
        transform: scale(1.05);
    }

    @media ${deviceMin.mobileS} {
        display: none;
    }

    @media ${deviceMin.tablet} {
        display: block;
    }
`;

const NavbarLogo = styled.img`
    object-fit: fill;
    height: 2.6rem;

    @media ${deviceMin.mobileS} {
        height: 2rem;
    }
`;

const BurgerMenuContainer = styled.button`
    margin-left: 1em;
    position: relative;
    background: inherit;
    border: none;
    cursor: pointer;

    @media ${deviceMin.mobileS} {
        display: block;
    }

    @media ${deviceMin.tablet} {
        display: none;
    }
`;

//Interface:

const Navbar = () => {
    const sideBarStyles = {
        bmBurgerButton: {
            // position: 'absolute',
            width: '1.85rem',
            height: '1.85rem',
        },
        bmBurgerBars: {
            background: '#fdbc3d',
        },
        bmBurgerBarsHover: {
            background: '#fdbc3d',
        },
        bmCrossButton: {
            height: '24px',
            width: '24px',
        },
        bmCross: {
            background: '#fdbc3d',
        },
        bmMenuWrap: {
            position: 'fixed',
            height: '30%',
        },
        bmMenu: {
            background: '#1b222a',
            padding: '2em .5em 0',
            fontSize: '1.15em',
            borderRadius: '.6em',
            opacity: '0.95',
        },
        bmMorphShape: {
            fill: '#1b222a',
        },
        bmItemList: {
            color: 'rgba(255, 255, 255, 1)',
            padding: '0.8em',
        },
        bmItem: {
            font: 'Lato',
            display: 'inline-block',
            margin: '.5em 0',
            color: 'rgba(255, 255, 255, 1)',
            opacity: '1',
            fontSize: '1rem',
        },
        bmOverlay: {
            background: 'none',
        },
    };

    return (
        <NavbarContainer>
            <NavbarLogoContainer>
                <NavbarLogo src={navLogo} />
            </NavbarLogoContainer>
            <NavbarLinksContainer>
                <NavbarLinkContainer>
                    <NavbarLink to="projectcontainer" smooth={true}>
                        Projects
                    </NavbarLink>
                </NavbarLinkContainer>
                <NavbarLinkContainer>
                    <NavbarLink
                        to="aboutmecontainer"
                        smooth={true}
                        offset={-200}
                    >
                        About
                    </NavbarLink>
                </NavbarLinkContainer>
                <NavbarLinkContainer>
                    <NavbarLink to="contactformcontainer" smooth={true}>
                        Contact
                    </NavbarLink>
                </NavbarLinkContainer>
            </NavbarLinksContainer>
            <NavbarSocialMediaContainer>
                <NavbarSocialMediaIconWrapper
                    href="https://twitter.com/harryzhou10"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <TwitterIcon />
                </NavbarSocialMediaIconWrapper>
                <NavbarSocialMediaIconWrapper
                    href="https://github.com/Haz-git"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <GithubIcon />
                </NavbarSocialMediaIconWrapper>
                <NavbarSocialMediaIconWrapper
                    href="https://linkedin.com/in/haz125"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <LinkedinIcon />
                </NavbarSocialMediaIconWrapper>
                <BurgerMenuContainer>
                    {/* <MenuIcon /> */}
                    <Sidebar
                        styles={sideBarStyles}
                        right
                        width={'40%'}
                        noOverlay
                    >
                        <NavbarLink to="projectcontainer" smooth={true}>
                            My Projects
                        </NavbarLink>
                        <NavbarLink
                            to="aboutmecontainer"
                            smooth={true}
                            offset={-100}
                        >
                            About Me
                        </NavbarLink>
                        <NavbarLink to="contactformcontainer" smooth={true}>
                            Contact Me
                        </NavbarLink>
                    </Sidebar>
                </BurgerMenuContainer>
            </NavbarSocialMediaContainer>
        </NavbarContainer>
    );
};

export default Navbar;

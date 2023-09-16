import React, { useState } from 'react';
import { LogoContainer, Nav, NavLinkContainer, SearchBar, SearchContent, Avatar, Dot, MenuIcon, OverlayMenu, CloseButtonContainer, CloseIcon, MenuLinkContainer, NavRightContainer, NavLeftContainer, MobileIcon, NavLink } from './NavElement';
import Image from 'next/image';
import LogoImage from '../../../assets/logo.png';
import profile from '../../../assets/profile.png';
// import NavLink from './NavLink';
import { AiOutlineGift, AiOutlineSearch } from 'react-icons/ai';
import { MdOutlineNotifications } from 'react-icons/md';
import { useRouter } from 'next/router';

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false)

    const openMenu = () => {
        setShowMenu(true)
    }

    const closeMenu = () => {
        setShowMenu(false)
    }
    const pathname = useRouter();
    const currentRoute = pathname.route
    return (
        <Nav>
            <LogoContainer>
                <Image
                    src={LogoImage}
                    alt="logo"
                    width={160}
                    height={47}
                />

            </LogoContainer>
            <MobileIcon>
                <MenuIcon size={30} onClick={openMenu} />
            </MobileIcon>
            <NavLinkContainer>
                <NavLeftContainer>
                    <NavLink href="/" className={currentRoute == '/' ? 'active' : ''}>Home
                        <span className='dot'></span>
                    </NavLink>
                    <NavLink href="/tvShow" className={currentRoute == "/tvShow" ? 'active' : ''}>TV Show
                        <span className='dot'></span>
                    </NavLink>
                    <NavLink href="/movies" className={currentRoute == "/movies" ? 'active' : ''}>Movies
                        <span className='dot'></span>
                    </NavLink>
                    <NavLink href="/new" className={currentRoute == "/new" ? 'active' : ''}>New
                        <span className='dot'></span>
                    </NavLink>
                </NavLeftContainer>
                <NavRightContainer>

                    <SearchContent>
                        <SearchBar type="search" placeholder='SEARCH' />
                        <AiOutlineSearch style={{ position: "absolute", right: "8px", top: "6px", color: "white" }} />
                    </SearchContent>
                    <AiOutlineGift color="white" fontSize="23px" />
                    <MdOutlineNotifications color="white" fontSize="23px" />
                    <Avatar>
                        <Image
                            src={profile}
                            alt="logo"
                            width={30}
                            height={30}
                        /><Dot></Dot>
                    </Avatar>
                </NavRightContainer>

            </NavLinkContainer>


            {
                showMenu &&
                <OverlayMenu>
                    <CloseButtonContainer>
                        <CloseIcon
                            size={40}
                            color={'white'}
                            onClick={closeMenu}
                        />
                    </CloseButtonContainer>
                    <MenuLinkContainer>
                        <NavLink href="/" onClick={closeMenu} className={currentRoute ? 'active' : ''}>
                            Home
                            <span className='dot'></span>
                        </NavLink>
                        <NavLink href="/tvShow" onClick={closeMenu} className={currentRoute ? 'active' : ''}>
                            TV Show
                            <span className='dot'></span>
                        </NavLink>
                        <NavLink href="/movies" onClick={closeMenu} className={currentRoute ? 'active' : ''}>
                            Movies
                            <span className='dot'></span>
                        </NavLink >
                        <NavLink href="/new" onClick={closeMenu} className={currentRoute ? 'active' : ''}>
                            New
                            <span className='dot'></span>
                        </NavLink>
                        <SearchContent>
                            <SearchBar type="search" placeholder='SEARCH' />
                            <AiOutlineSearch style={{ position: "absolute", right: "8px", top: "6px", color: "white" }} />
                        </SearchContent>
                        <AiOutlineGift color="white" fontSize="23px" />
                        <MdOutlineNotifications color="white" fontSize="23px" />
                        <Avatar>
                            <Image
                                src={profile}
                                alt="logo"
                                width={30}
                                height={30}
                            /><Dot></Dot>
                        </Avatar>
                    </MenuLinkContainer>
                </OverlayMenu>
            }
        </Nav>
    )
}

export default Navbar
import React, { useState, useEffect, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import { Link, useNavigate } from "react-router-dom";

import { ReactComponent as CogIcon } from '../images/icons/cog.svg';
import { ReactComponent as ChevronIcon } from '../images/icons/chevron.svg';
import { ReactComponent as ArrowIcon } from '../images/icons/arrow.svg';
import { ReactComponent as BoltIcon } from '../images/icons/bolt.svg';
import { AiOutlineHome } from 'react-icons/ai';
import { AiFillCaretDown } from 'react-icons/ai';
import { BsViewList } from 'react-icons/bs';
import { FcTreeStructure } from 'react-icons/fc';
import { MdCardMembership } from 'react-icons/md';
import { GrProjects } from 'react-icons/gr';
import { MdOutlineNotificationsNone } from 'react-icons/md';
import { FaConnectdevelop } from 'react-icons/fa';
import { FaBloggerB } from 'react-icons/fa';
import { FcConferenceCall } from 'react-icons/fc';
import { GrAchievement } from 'react-icons/gr';
import { FcGallery } from 'react-icons/fc';

import './NavBar.css';

function NavBar(props) {

    const [fixNav, SetFixNav] = useState(false);

    const navOnScroll = () => {
        (window.scrollY >= 90) ? SetFixNav(true) : SetFixNav(false);
    }

    window.addEventListener('scroll', navOnScroll);

    return (
        <div className={fixNav ? 'my-nav-bar-all fix-nav-top' : 'my-nav-bar-all'}>

            <NavbarLeft>
                <NavbarLeftItem name={<AiOutlineHome className="menu-icon" />} address='/'></NavbarLeftItem>
                <NavbarLeftItem name="About" address={null} icon={<AiFillCaretDown />}>
                    <DropdownMenuMain>
                        <DropdownItem leftIcon={<BsViewList />} address='/org-review'> Organisation Review </DropdownItem>
                        <DropdownItem leftIcon={<FcTreeStructure />} address='/org-structure'> Structure & Governance </DropdownItem>
                        <DropdownItem leftIcon={<MdCardMembership />} address='/membership'> Membership </DropdownItem>
                        <DropdownItem leftIcon={<GrProjects />} address='/projects'> Projects </DropdownItem>
                        <DropdownItem leftIcon={<MdOutlineNotificationsNone />} address='/notice-board' > Notice Board </DropdownItem>
                        <DropdownItem leftIcon={<FaConnectdevelop />} address='/dev-team'> Development Team </DropdownItem>
                    </DropdownMenuMain>
                </NavbarLeftItem>
                <NavbarLeftItem name="Resourse Center" address={null} icon={<AiFillCaretDown />}>
                    <DropdownMenuMain>
                        <DropdownItem leftIcon={<FaBloggerB />} address='/bloggs'> Bloggs</DropdownItem>
                        <DropdownItem leftIcon={<FcConferenceCall />} address='/conferences'> Conferences & Debates</DropdownItem>
                        <DropdownItem leftIcon={<GrAchievement />} address='/achievement'> Book Of Achievements </DropdownItem>
                        <DropdownItem leftIcon={<FcGallery />} address='/gallery'> Gallery </DropdownItem>
                    </DropdownMenuMain>
                </NavbarLeftItem>
                <NavbarLeftItem name="Career" address='/career' />
                <NavbarLeftItem name="Contact" address='/contact' />
            </NavbarLeft>

            <Link className="donate-button" to="/donation">DONATE</Link>

            {/*<NavbarRight>
                <NavItem icon={<BellIcon />} />
                <NavItem icon={<MessengerIcon />} />
                <NavItem icon={<CaretIcon />}>
                    <DropdownMenu></DropdownMenu>
                </NavItem>
            </NavbarRight>*/}
        </div>
    );
}

/////////////////--------LEFT NAVIGATION-----------------/////////////////////////////////

function NavbarLeft(props) {
    return (
        <nav className="nav-bar-left">
            <ul className="navbar-nav">{props.children}</ul>
        </nav>
    );
}

///////////////////////////////////////////////////////////////////////////////////////////////

function NavbarLeftItem(props) {

    const [dropMenu, setDropMenu] = useState(false);
    const history = useNavigate();

    return (
        <li className="nav-bar-left-item-li" onMouseEnter={() => setDropMenu(true)} onMouseLeave={() => setDropMenu(false)}>
            
            <div className="nav-bar-left-item"
                onClick={() => props.address === null ? setDropMenu(!dropMenu) : history.push(props.address)}>
                {props.name}
                {props.icon}
            </div>

            {dropMenu && props.children}
        </li>
    );
}

function DropdownMenuMain(props) {
    const [menuHeight, setMenuHeight] = useState(null);
    const dropdownRef = useRef(null);

    useEffect(() => {
        setMenuHeight(dropdownRef.current?.firstChild.offsetHeight)
    }, [])

    function calcHeight(el) {
        const height = el.offsetHeight;
        setMenuHeight(height);
    }

    return (
        <div className="dropdown" style={{ transform: 'translateX(0%)' }} ref={dropdownRef}>
            <div>
                {props.children}
            </div>
        </div>
    );
}

function DropdownItem(props) {
    const [dropDown, setDropDown] = useState(true);

    const history = useNavigate();

    return (
        <div className="menu">
            <div className="menu-item" onClick={() => { history.push(props.address); setDropDown(false) }}>
                <span className="icon-button">{props.leftIcon}</span>
                {props.children}
                <span className="icon-right">{props.rightIcon}</span>
            </div>
        </div>
    );
}


////////////////////////////////--------RIGHT NAVIGATION-----------------//////////////////////////////////////////

function NavbarRight(props) {
    return (
        <nav className="navbar">
            <ul className="navbar-nav">{props.children}</ul>
        </nav>
    );
}

function NavItem(props) {
    const [open, setOpen] = useState(false);

    return (
        <li className="nav-item">
            <div className="icon-button" onClick={() => setOpen(!open)}>
                {props.icon}
            </div>

            {open && props.children}
        </li>
    );
}

function DropdownMenu() {
    const [activeMenu, setActiveMenu] = useState('main');
    const [menuHeight, setMenuHeight] = useState(null);
    const dropdownRef = useRef(null);

    useEffect(() => {
        setMenuHeight(dropdownRef.current?.firstChild.offsetHeight)
    }, [])

    function calcHeight(el) {
        const height = el.offsetHeight;
        setMenuHeight(height);
    }

    function DropdownItem(props) {

        const history = useNavigate();

        return (
            <div className="menu-item" onClick={() => props.goToMenu != null ? props.goToMenu && setActiveMenu(props.goToMenu) : history.push(props.address)}>
                <span className="icon-button">{props.leftIcon}</span>
                {props.children}
                <span className="icon-right">{props.rightIcon}</span>
            </div>
        );
    }

    return (
        <div className="dropdown" style={{ height: menuHeight }} ref={dropdownRef}>

            <CSSTransition in={activeMenu === 'main'} timeout={500} classNames="menu-primary" unmountOnExit onEnter={calcHeight}>

                <div className="menu">
                    <DropdownItem address='/my-profile'>My Profile</DropdownItem>
                    <DropdownItem leftIcon={<CogIcon />} rightIcon={<ChevronIcon />} goToMenu="settings"> Settings </DropdownItem>
                    <DropdownItem leftIcon="🦧" rightIcon={<ChevronIcon />} goToMenu="animals"> Animals </DropdownItem>
                    <DropdownItem leftIcon="🦧" rightIcon={<ChevronIcon />}> Log Out </DropdownItem>
                </div>

            </CSSTransition>

            <CSSTransition in={activeMenu === 'settings'} timeout={500} classNames="menu-secondary" unmountOnExit onEnter={calcHeight}>

                <div className="menu">
                    <DropdownItem goToMenu="main" leftIcon={<ArrowIcon />}> <h2>My Tutorial</h2> </DropdownItem>
                    <DropdownItem leftIcon={<BoltIcon />}>HTML</DropdownItem>
                    <DropdownItem leftIcon={<BoltIcon />}>CSS</DropdownItem>
                    <DropdownItem leftIcon={<BoltIcon />}>JavaScript</DropdownItem>
                    <DropdownItem leftIcon={<BoltIcon />}>Awesome!</DropdownItem>
                </div>

            </CSSTransition>

            <CSSTransition in={activeMenu === 'animals'} timeout={500} classNames="menu-secondary" unmountOnExit onEnter={calcHeight}>

                <div className="menu">
                    <DropdownItem goToMenu="main" leftIcon={<ArrowIcon />}> <h2>Animals</h2> </DropdownItem>
                    <DropdownItem leftIcon="🦘">Kangaroo</DropdownItem>
                    <DropdownItem leftIcon="🐸">Frog</DropdownItem>
                    <DropdownItem leftIcon="🦋">Horse?</DropdownItem>
                    <DropdownItem leftIcon="🦔">Hedgehog</DropdownItem>
                </div>

            </CSSTransition>

        </div>
    );
}

export default NavBar;
import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from '../images/logo.png'

import './Header.css';

class Header extends Component {
    render() {
        return (

            <div className="header">

                <p className="header-p">We connect, Inspire & Grow Talent Amongst The Youth</p>
                <Link className="header-logo" to="/">
                    <img id="header-logo" src={logo} />
                </Link>
                <p className="header-p">Let's Join hands to promote talents in our society.</p>

            </div>
        )
    }
}

export default Header;

{/*<div className="nav-bar">
            <Link className="nav-bar-link" to='/'>Home</Link>
            <Link className="nav-bar-link" to='/'>About</Link>
            <Link className="nav-bar-link" to='/'>Volunteers</Link>
            <Link className="nav-bar-link" to='/'>Donate</Link>
            <Link className="nav-bar-link" to='/'>Sponsor a Child</Link>
            <Link className="nav-bar-link" to='/'>Sponsors & Doners</Link>
            <Link className="nav-bar-link" to='/'>Gallery</Link>
            <Link className="nav-bar-link" to='/'>Blogs</Link>
            <Link className="nav-bar-link" to='/'>Notices</Link>
            <Link className="nav-bar-link" to='/'>Contact</Link>
</div>*/}
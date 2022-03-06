import React, { Component } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import { BsFacebook, BsTwitter, BsYoutube, BsInstagram, } from "react-icons/bs"


import './Footer.css'

import logo from '../images/logo.png';

class Footer extends Component {
    render() {
        return (
            <div className="my-footer">
                <div className="footer-columns-holder">

                    <div className="column">
                        <h3>Summary</h3>

                        <p>NetPlus Kenya is an agency that purposes to provide a platform for young people to showcase their talents, skills
                            and connect them with persons who can support their vision at whatever capacity.
                        </p>

                        <div className="footer-logo-holder">
                            <img className="footer-picture-logo" src={logo} />
                        </div>
                    </div>

                    <div className="column">
                        <h3>Navigation Links</h3>
                        <Link className="footer-nav-link" to='/homepage/mcwadeya'>Home</Link>
                        <Link className="footer-nav-link" to='/about-us'>About</Link>
                        <Link className="footer-nav-link" to='/about-us'>Gallery</Link>
                        <Link className="footer-nav-link" to='/about-us'>Projects</Link>
                        <Link className="footer-nav-link" to='/about-us'>Blogs</Link>
                        <Link className="footer-nav-link" to='/download'>Downloads</Link>
                        <Link className="footer-nav-link" to='/notice-board'>Notice Board</Link>
                        <Link className="footer-nav-link" to='/student-projects'>Volunteers</Link>
                        <Link className="footer-nav-link" to='/gallery'>Gallery</Link>
                        <Link className="footer-nav-link" to='/contact-us'>Contact Us</Link>
                    </div>

                    <div className="column footer-contact">
                        <p>
                            <h3>Contact</h3>
                            +254 710 253 321<br /><br />
                            netpluskenya@gmail.com<br /><br />
                            netplus254@gmail.com
                        </p>
                    </div>

                </div>

                <div className="social-media">
                    <a href="#"> <BsFacebook /> </a>
                    <a href="#"><BsTwitter /> </a>
                    <a href="#"><BsYoutube /> </a>
                    <a href="#"><BsInstagram /></a >
                </div >


                <div className="copyright">
                    <ul>
                        <li><Link className="copyright-link" to="#">Terms & Conditions</Link></li>
                        <li><Link className="copyright-link" to="#">Privacy Policy</Link></li>
                    </ul>
                    <span >Copyright © 2021, All Right Reserved - netPlus Kenya</span>
                </div>

                <div className="bottom-line" style={{ height: '10px', width: '100%', backgroundColor: "black" }}>
                </div>

            </div >
        )
    }
}

export default Footer;
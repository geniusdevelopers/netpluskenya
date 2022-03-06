import React, { Component, useState } from "react";
import { Link } from "react-router-dom";

import './Sponsor.css'
import SponsorRegister from "./SponsorRegister";


import { BsChevronDoubleDown } from 'react-icons/bs';
import {AiFillCloseCircle } from 'react-icons/ai';

import LogInForm from "../LogIn/LogInForm";

function Sponsor(props) {

    const [registerSponsorButton, setRegisterSponsorButton] = useState(false);
    const [logInButton, setLogInButton] = useState(false);

    const [registerSponsor, setRegisterSponsor] = useState(false);
    const [logIn, setLogIn] = useState(false);

    function closeSponsorWindow(props){
        setRegisterSponsorButton(false);
        setLogInButton(false);
        setRegisterSponsor(false);
        setLogIn(false);
    }

    return (
        <div className="sponsor">
            {(registerSponsor || logIn) && <AiFillCloseCircle className="close-sponsor-window"  onClick={closeSponsorWindow}/>}
            <a className="sponsor-link" onClick={()=>{setRegisterSponsorButton(true);setLogInButton(true)}}>Are You A Sponsor? <BsChevronDoubleDown /></a>
            {(logInButton && registerSponsorButton) && <a className="links" onClick={() => { setRegisterSponsor(true); setLogIn(false) }}>Register </a>}
            {(logInButton && registerSponsorButton) && <a className="links" onClick={() => { setLogIn(true); setRegisterSponsor(false) }}>See Your Child's Progress. </a>}
            {registerSponsor && !logIn && <SponsorRegister />}
            {logIn && !registerSponsor && <LogInForm />}

        </div>
    )
}

export default Sponsor;
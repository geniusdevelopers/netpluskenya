import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./DevTeam.css";

import teamleader from '../images/DevTeam/jnr.JPG'

function DevTeam(props) {
    return (
        <div className="DevTeam">
            <h1>Lesmeileures Development Team</h1>
            <img src={teamleader} className="team-leader-image"/>
        </div>
    )
}

export default DevTeam;
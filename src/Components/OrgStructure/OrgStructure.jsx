import React, { Component } from "react";
import { Link } from "react-router-dom";

import logo_6 from '../images/home/logo_6.png'
import orgStructure from '../images/home/orgStructure.png'

import "./OrgStructure.css";

function OrgStructure(props) {
    return (
        <div className="OrgStructure">
            <h1>Meet the team</h1>
            <p>
                We have a team of dedicated, passionate and talented people that believe fully in the aspirations of the agency and put
                their minds and efforts together to come up with transformational ideas that better the community.
            </p>
            <img src={orgStructure} />
            <div className="staff-profile-holder">
                <Staff /><Staff /><Staff /><Staff /><Staff /><Staff /><Staff /><Staff /><Staff /><Staff /><Staff /><Staff /><Staff /><Staff />
            </div>
        </div>
    )
}

function Staff(props) {
    return (
        <div className="staff-profile">
            <img src={logo_6} className="profile-pic" />
            <name>Cheryl Okumu</name>
            <position>Co-founder & C.E.O</position>
            <quote className="hidden-profile">
                We have a team of dedicated, passionate and talented people that believe fully in the aspirations of the agency and put
                their minds and efforts together to come up with transformational ideas that better the community.We have a team of dedicated,
                passionate and talented people that believe fully in the aspirations of the agency and put
                their minds and efforts together to come up with transformational ideas that better the community.We have a team of dedicated,
                passionate and talented people that believe fully in the aspirations of the agency and put
                their minds and efforts together to come up with transformational ideas that better the community.
            </quote>
            <button className="more-button">Full Profile</button>
        </div>
    )
}

export default OrgStructure;
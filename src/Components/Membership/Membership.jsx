import React, { Component, useState } from "react";
import { Link } from "react-router-dom";

import { BsChevronDoubleDown } from 'react-icons/bs';
import { BsChevronDoubleUp } from 'react-icons/bs';

import "./Membership.css";

function Membership(props) {

    const [isVolunteerMinimized, SetisVolunteerMinimized] = useState(true);
    const [isSponsorMinimized, SetisSponsorMinimized] = useState(true);
    const [isMentorMinimized, SetisMentorMinimized] = useState(true);

    return (
        <div className="Membership">
            <h1>Join Us; Let's together restore humanity in the less fortunate.</h1>
            <h3>How to be part of the team.</h3>

            <div className="join-div">
                <header className="join-category-header" onClick={() => { HandleVolunteerClick() }}>
                    Volunteer
                    {isVolunteerMinimized ? <BsChevronDoubleDown className="expand-arrow-down" /> : <BsChevronDoubleUp className="expand-arrow-down" />}
                </header>
                <div className={isVolunteerMinimized ? "minimize-volunteer" : "maximize-volunteer"}>
                    We have a team of dedicated, passionate and talented people that believe fully in the aspirations of the agency and put
                    their minds and efforts together to come up with transformational ideas that better the community.We have a team of dedicated,
                    passionate and talented people that believe fully in the aspirations of the agency and put
                    their minds and efforts together to come up with transformational ideas that better the community.We have a team of dedicated,
                    passionate and talented people that believe fully in the aspirations of the agency and put
                    their minds and efforts together to come up with transformational ideas that better the community.
                    We have a team of dedicated, passionate and talented people that believe fully in the aspirations of the agency and put
                    their minds and efforts together to come up with transformational ideas that better the community.We have a team of dedicated,
                    passionate and talented people that believe fully in the aspirations of the agency and put
                    their minds and efforts together to come up with transformational ideas that better the community.We have a team of dedicated,
                    passionate and talented people that believe fully in the aspirations of the agency and put
                    their minds and efforts together to come up with transformational ideas that better the community.
                    We have a team of dedicated, passionate and talented people that believe fully in the aspirations of the agency and put
                    their minds and efforts together to come up with transformational ideas that better the community.We have a team of dedicated,
                    passionate and talented people that believe fully in the aspirations of the agency and put
                    their minds and efforts together to come up with transformational ideas that better the community.We have a team of dedicated,
                    passionate and talented people that believe fully in the aspirations of the agency and put
                    their minds and efforts together to come up with transformational ideas that better the community.
                    We have a team of dedicated, passionate and talented people that believe fully in the aspirations of the agency and put
                    their minds and efforts together to come up with transformational ideas that better the community.We have a team of dedicated,
                    passionate and talented people that believe fully in the aspirations of the agency and put
                    their minds and efforts together to come up with transformational ideas that better the community.We have a team of dedicated,
                    passionate and talented people that believe fully in the aspirations of the agency and put
                    their minds and efforts together to come up with transformational ideas that better the community.
                </div>
            </div>

            <div className="join-div">
                <header className="join-category-header" onClick={() => { HandleSponsorClick() }}>
                    Sponsor
                    {isSponsorMinimized ? <BsChevronDoubleDown className="expand-arrow-down" /> : <BsChevronDoubleUp className="expand-arrow-down" />}
                </header>
                <div className={isSponsorMinimized ? "minimize-volunteer" : "maximize-volunteer"}>
                    We have a team of dedicated, passionate and talented people that believe fully in the aspirations of the agency and put
                    their minds and efforts together to come up with transformational ideas that better the community.We have a team of dedicated,
                    passionate and talented people that believe fully in the aspirations of the agency and put
                    their minds and efforts together to come up with transformational ideas that better the community.We have a team of dedicated,
                    passionate and talented people that believe fully in the aspirations of the agency and put
                    their minds and efforts together to come up with transformational ideas that better the community.
                </div>
            </div>

            <div className="join-div">
                <header className="join-category-header" onClick={() => { HandleMentorClick() }}>
                    Mentor
                    {isMentorMinimized ? <BsChevronDoubleDown className="expand-arrow-down" /> : <BsChevronDoubleUp className="expand-arrow-down" />}
                </header>
                <div className={isMentorMinimized ? "minimize-volunteer" : "maximize-volunteer"}>
                    We have a team of dedicated, passionate and talented people that believe fully in the aspirations of the agency and put
                    their minds and efforts together to come up with transformational ideas that better the community.We have a team of dedicated,
                    passionate and talented people that believe fully in the aspirations of the agency and put
                    their minds and efforts together to come up with transformational ideas that better the community.We have a team of dedicated,
                    passionate and talented people that believe fully in the aspirations of the agency and put
                    their minds and efforts together to come up with transformational ideas that better the community.
                </div>
            </div>

        </div>
    )

    function HandleVolunteerClick() {
        return isVolunteerMinimized ? SetisVolunteerMinimized(false) : SetisVolunteerMinimized(true)
    }

    function HandleSponsorClick() {
        return isSponsorMinimized ? SetisSponsorMinimized(false) : SetisSponsorMinimized(true)
    }

    function HandleMentorClick() {
        return isMentorMinimized ? SetisMentorMinimized(false) : SetisMentorMinimized(true)
    }
}

export default Membership;
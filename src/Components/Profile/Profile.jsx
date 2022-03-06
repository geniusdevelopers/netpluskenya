import React, { Component } from "react";
import { Link } from "react-router-dom";

import PersonalDetails from "./PersonalDetails";
import CourseCartalogue from "./CourseCartalogue";

import profile from '../images/profile.png';

class PersonalProfile extends Component {
    render() {
        return (
            <div className="my-profile-page-holder">
                <div className="my-profile-page">

                    <div className="cover-photo">
                        <img className="profile-picture" src={profile} />
                    </div>

                    <div className="user-name">
                        <h3>Mc Jnr Wadeya</h3>
                    </div>

                    <div className="profile-nav-buttons-container">
                        <button className="profile-nav-buttons">About</button>
                        <button className="profile-nav-buttons">Posts</button>
                        <button className="profile-nav-buttons">Transcrips</button>
                        <button className="profile-nav-buttons">Course Cartalogue</button>
                        <button className="profile-nav-buttons">Edit Profile</button>
                        <button className="profile-nav-buttons">More...</button>
                    </div>

                    <div className="profile-content">
                        <h1>About</h1>
                        <PersonalDetails/>
                    </div>

                    <div className="profile-content">
                        <h1>Course Cartalogue <a href="#">KNEC</a></h1>
                        <CourseCartalogue/>
                    </div>

                    <div className="profile-content">
                        <h1>Transcrips</h1>
                    </div>

                    <div className="profile-content">
                        <h1>Posts</h1>
                    </div>
                </div>
            </div>
        )
    }
}

export default PersonalProfile;
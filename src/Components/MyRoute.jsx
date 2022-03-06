import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./HeaderFooter/Header";
import Footer from "./HeaderFooter/Footer";

import Home from "./Home";
import OrgReview from './OrgReview/OrgReview'
import OrgStructure from './OrgStructure/OrgStructure'
import Membership from './Membership/Membership'
import Projects from './Projects/Projects'
import Notice from './Notices/Notice'
import DevTeam from './DevTeam/DevTeam'
import Blogg from './Bloggs/Blogg'
import Conference from './Conferences/Conference'
import Achievement from './Achievement/Achievement'
import Gallery from './Gallery/Gallery'
import Career from './Career/Career'
import Contact from './Contact/Contact'

import Sponsor from "./Sponsor/Sponsor";
import NavBar from "./NavBar/NavBar";

import './MyRoute.css'
import './All.css'
import ChatRoom from "./ChatRoom/ChatRoom";
import Donation from "./Sponsor/Donation";

class MyRoute extends Component {
    render() {
        return (
            <div className="route">

                <Router>

                    <Header />
                    <NavBar/>
                    <div className="fix-sponsor-window">
                        <Sponsor />
                    </div>

                    <Routes>
                        <Route exact path="/" element={<Home/>} />
                        <Route exact path="/org-review" element={<OrgReview/>} />
                        <Route exact path="/org-structure" element={<OrgStructure/>} />
                        <Route exact path="/membership" element={<Membership/>} />
                        <Route exact path="/projects" element={<Projects/>} />
                        <Route exact path="/notice-board" element={<Notice/>} />
                        <Route exact path="/dev-team" element={<DevTeam/>} />
                        <Route exact path="/bloggs" element={<Blogg/>} />
                        <Route exact path="/conferences" element={<Conference/>} />
                        <Route exact path="/achievement" element={<Achievement/>} />
                        <Route exact path="/gallery" element={<Gallery/>} />
                        <Route exact path="/career" element={<Career/>} />
                        <Route exact path="/contact" element={<Contact/>} />
                        <Route exact path="/donation" element={<Donation/>} />
                        <Route element={<ErrorURL/>} />
                    </Routes>

                    <div className="fix-chartroom" >
                        <ChatRoom/>
                    </div>
                    <Footer />

                </Router>

            </div>
        )
    }
}

function ErrorURL() {
    return (
        <div className="error-page">Ooops!!! Sorry, URL error. Kindly contact us <a href="">here</a></div>
    )
}

export default MyRoute;

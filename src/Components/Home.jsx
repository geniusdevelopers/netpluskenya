import React, { Component } from "react";
import { Link } from "react-router-dom";
import GallerySlider from "./Gallery/GallerySlider";

import './Home.css'

function Home(props) {

    return (
        <div className="home-page">

            <div className="home-scroll-pictures">
                <GallerySlider />
            </div>

            <div className="home-intro">

                <div className="events-calender">
                    <p>Get 2022 Calender of activities</p>
                    <button>View</button>
                    <button>Download</button>
                </div>

                <h1><b>netPlus</b>, Empowering all people with career possibilities</h1>
                <h3>Let's Go Invent Tomorrow Instead Of Worrying About What Happened Yesterday.</h3>
                <p>We transform lives of learners, educators and communities through the power of technology,
                    education and career opportunities. Available to anyone, anywhere.
                </p>
            </div>

            <div className="slogan">

                <h1>Slogan</h1>
                <p>
                    An incredible opportunity is waiting for you. Technology is changing the world by
                    connecting billions of devices and improving how we live, work, play and treat our
                    planet. No industry is immune. Are you ready to change your life, and possibly make
                    the world a better place?
                </p>
            </div>


        </div>
    )
}


export default Home;
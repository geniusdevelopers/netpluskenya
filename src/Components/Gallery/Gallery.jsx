import React, { Component } from "react";
import { Link } from "react-router-dom";

import { FcNext } from 'react-icons/fc';
import { FcPrevious } from 'react-icons/fc';


import "./Gallery.css";

import GallerySlider from "./GallerySlider";

function Gallery(props) {

    return (
        <div className="gallery-page">

            <div className="picture-holder">
                <GallerySlider />
            </div>

            <captiondiv className="caption-div">
                <mytext className="picture-info">
                    Use this space to start a dialogue with your customers. Then remember to respond to
                    them when they answer back! Instagrammers love to see that brands have taken the time
                    to answer questions and concerns on Instagram…that is what the platform was made for
                    after all!
                    Notice how the social media managers over at Chipotle respond directly to comments –
                    also signing off each message so they know that it was Gabe (in this case) who got
                    back to them. This really humanizes the brand, giving people the feeling that they’re
                    interacting with a person rather than a company.
                    This means that telling the story behind a photo can make it far more engaging. A user 
                    can become far more engaged with an image – taking time to stop, consider and enjoy it – 
                    because the caption showed them why they are looking at something special.
                    Think about how music fans enjoy ‘rockumentaries’ showing how their favourite album was 
                    made (‘Funky Monks’ for the Red Hot Chili Peppers, anyone?), or director’s commentary 
                    for famous films.
                    If you decide to tell the story behind a post and multiply its value, you should do so 
                    using a signature style of some kind. Gimmicks, inside jokes, personality, whatever you 
                    want to call it: having repeated structures gives you parameters to work with when 
                    writing captions. And it gives your brand a unique voice that your followers can 
                    understand and enjoy, as if you were one of their friends with a quirky personality.
                </mytext>
            </captiondiv>

        </div>
    )
}

export default Gallery;

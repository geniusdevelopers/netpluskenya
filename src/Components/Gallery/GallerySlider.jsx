import React, { useState } from 'react'
import './GallerySlider.css'

import BtnSlider from './BtnSlider'
import dataSlider from './dataSlider'

import img1 from '../images/home/gallerySlider/img1.jpg'
import img2 from '../images/home/gallerySlider/img2.jpg'
import img3 from '../images/home/gallerySlider/img3.jpg'
import img4 from '../images/home/gallerySlider/img4.jpg'
import img5 from '../images/home/gallerySlider/img5.jpg'
import img6 from '../images/home/gallerySlider/img6.jpg'
import img7 from '../images/home/gallerySlider/img7.png'

export default function GallerySlider() {


    const [slideIndex, setSlideIndex] = useState(1)

    const nextSlide = () => {
        if (slideIndex !== dataSlider.length) {
            setSlideIndex(slideIndex + 1)
        }
        else if (slideIndex === dataSlider.length) {
            setSlideIndex(1)
        }
    }

    const prevSlide = () => {
        if (slideIndex !== 1) {
            setSlideIndex(slideIndex - 1)
        }
        else if (slideIndex === 1) {
            setSlideIndex(dataSlider.length)
        }
    }

    const moveDot = index => {
        setSlideIndex(index)
    }

    const sliderImages = [img1, img2, img3, img4, img5, img6, img7];
   
    return (
        <div className="container-gallery-slider">
            {dataSlider.map((obj, index) => {
                return (
                    <div key={obj.id} className={slideIndex === index + 1 ? "slide active-slide" : "slide"}>
                        <img className='slide-picture' src={sliderImages[index]} />
                    </div>
                )
            })}

                <BtnSlider moveSlide={nextSlide} direction={"next"} />
                <BtnSlider moveSlide={prevSlide} direction={"prev"} />

            <div className="container-dots">
                {Array.from({ length: 7 }).map((item, index) => (
                    <div
                        onClick={() => moveDot(index + 1)}
                        className={slideIndex === index + 1 ? "dot active" : "dot"}
                    ></div>
                ))}
            </div>
        </div>
    )
}


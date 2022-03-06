import React from "react";
import "./GallerySlider.css";

import { FcNext } from 'react-icons/fc';
import { FcPrevious } from 'react-icons/fc';

export default function BtnSlider({ direction, moveSlide }) {
  return (
    <slidebutton onClick={moveSlide} className={direction === "next" ? "btn-slide next" : "btn-slide prev"}>
      {direction === "next" ? <FcNext className="btn-slide" /> : <FcPrevious className="btn-slide" />}
    </slidebutton>
  );
}

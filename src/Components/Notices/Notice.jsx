import React, { Component } from "react";
import { Link } from "react-router-dom";
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'; 

import "./Notice.css";

function Notice(props) {
    return (
        <div className="Notice">
            <h1>Calender of Events</h1>
            <Calendar/>
        </div>
    )
}

export default Notice;
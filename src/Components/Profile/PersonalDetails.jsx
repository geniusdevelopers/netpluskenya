import React, { Component } from "react";
import { Link } from "react-router-dom";

//import profile from '../images/home/profile.png';

import "./Profile.css";

function PersonalDetails(props) {
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>

                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td rowSpan="2"><h3>Basic Info</h3></td><td></td>
                        <td></td><td></td>
                        <td><h3>Contact Info</h3></td><td></td>
                        <td></td><td></td>
                    </tr>
                </tbody>
            </table>
            
        </div>
    )
}

export default PersonalDetails;
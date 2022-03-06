import React, { Component } from "react";
import { Link } from "react-router-dom";

//import profile from '../images/home/profile.png';

import "./Profile.css";

class CourseCartalogue extends Component {
    constructor(props) {
        super(props);
        this.state = {
            units: [
                { unitCode: 'CCS101', unitName: 'Computer Maintanance & Support', status: 'Completed', score: 85, StartDate: new Date().toLocaleDateString(), lecturer: 'Mr. Denis' },
                { unitCode: 'CCS102', unitName: 'Basic Electronics', status: 'Completed', score: 85, StartDate: new Date().toLocaleDateString(), lecturer: 'Mr. Denis' },
                { unitCode: 'CCS103', unitName: 'Computer Repair', status: 'Completed', score: 85, StartDate: new Date().toLocaleDateString(), lecturer: 'Mr. Denis' },
                { unitCode: 'CCS104', unitName: 'Event Planning', status: 'Completed', score: 85, StartDate: new Date().toLocaleDateString(), lecturer: 'Mr. Denis' },
                { unitCode: 'CCS105', unitName: 'Graphic Design', status: 'Completed', score: 85, StartDate: new Date().toLocaleDateString(), lecturer: 'Mr. Denis' }
            ]
        }
    }
    render() {
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>CODE</th>
                            <th>UNIT NAME</th>
                            <th>STATUS</th>
                            <th>SCORE</th>
                            <th>DATE</th>
                            <th>LECTURER</th>

                        </tr>
                    </thead>

                    <tbody>
                        {
                            this.state.units.map(
                                list_units =>
                                    <tr>
                                        <td>{list_units.unitCode}</td>
                                        <td>{list_units.unitName}</td>
                                        <td>{list_units.status}</td>
                                        <td>{list_units.score}</td>
                                        <td>{list_units.StartDate.toString()}</td>
                                        <td>{list_units.lecturer}</td>
                                    </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default CourseCartalogue;
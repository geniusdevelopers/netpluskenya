import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import "./SponsorRegister.css";





class SponsorRegister extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: '',
            fisrtName: '',
            secondName: '',
            admission: '',
            courseName: '',
            module: '',
            countyCode: '',
            phoneNumber: '',
            email: '',
            OTP: '',
            password: '',
            confirmPassword: '',
            progress: 31+4
        };

        this.handleChangeMethod = this.handleChangeMethod.bind(this)

    }

    render() {
        return (
            <div className="sign-up-page">
                <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.8/css/all.css" />
                <br />
                <h2 className="create-account-header-txt">Create Account</h2>

                <div className="other-log-in-container">
                    <>Sign Up With:</>
                    <a href="https://twitter.com/" className="btn btn-twitter"> <i className="fab fa-twitter"></i> Google</a>
                    <a href="https://twitter.com/" className="btn btn-twitter"> <i className="fab fa-twitter"></i> Linked In</a>
                </div>
                <br />
                <p className="divider-text"> OR </p>
                <br />
                <form className="sign-up-form">

                    <div className="form-input-div">
                        {/*<p className="err-message-input">*You have entered a wrong name.</p>*/}
                        <select className="form-control" name="title" value={this.state.title} onChange={this.handleChangeMethod}>
                            <option>Title</option>
                            <option> Mr.</option>
                            <option>Mrs.</option>
                            <option>Miss</option>
                        </select>
                    </div>

                    <div className="form-input-div">
                        {/*<p className="err-message-input">*You have entered a wrong name.</p>*/}
                        <div className="flex-row">
                            <input name="fisrtName" className="form-control form-control-name" placeholder="First Name" value={this.state.fisrtName} onChange={this.handleChangeMethod} type="text" />
                        </div>
                        <input name="secondName" className="form-control form-control-name" placeholder="Second Name" value={this.state.secondName} onChange={this.handleChangeMethod} type="text" />
                    </div>

                    <div className="form-input-div">
                        {/*<p className="err-message-input">*You have entered a wrong name.</p>*/}
                        <input name="admission" className="form-control form-control-name" placeholder="Adm No." value={this.state.admission} onChange={this.handleChangeMethod} type="text" />
                        <input name="courseName" className="form-control form-control-name" placeholder="Course Nane" value={this.state.courseName} onChange={this.handleChangeMethod} type="text" />
                        <select className="form-control custom-select" name="module" value={this.state.module} onChange={this.handleChangeMethod}>
                            <option value="Module"> Module </option>
                            <option value="Short Course"> Short Course </option>
                            <option value="Module 1"> Module 1 </option>
                            <option value="Module 2"> Module 2 </option>
                            <option value="Module 3"> Module 3 </option>
                        </select>
                    </div>

                    <div className="form-input-div">
                        {/*<p className="err-message-input">*You have entered a wrong name.</p>*/}
                        <div className="flex-row">
                            <input name="email" className="form-control" placeholder="Email address" value={this.state.email} onChange={this.handleChangeMethod} type="email" />
                        </div>
                        <button> Verify  </button>
                        <input name="OTP" className="form-control" placeholder="Input OTP" value={this.state.OTP} onChange={this.handleChangeMethod} type="email" />
                    </div>

                    <div className="form-input-div">
                        {/*<p className="err-message-input">*You have entered a wrong name.</p>*/}
                        <div className="flex-row">
                            <select className="form-control custom-select" name="countyCode" value={this.state.countyCode} onChange={this.handleChangeMethod}>
                                <option value="+254"> +254 </option>
                                <option value="+972"> +972 </option>
                                <option value="+198"> +198 </option>
                                <option value="+701"> +701 </option>
                            </select>
                        </div>
                        <input name="phoneNumber" className="form-control" placeholder="Phone number" value={this.state.phoneNumber} onChange={this.handleChangeMethod} type="text" />
                    </div>

                    <div className="form-input-div">
                        {/*<p className="err-message-input">*You have entered a wrong name.</p>*/}
                        <div className="flex-row">
                            <input name="password" className="form-control" placeholder="Create password" value={this.state.password} onChange={this.handleChangeMethod} type="password" />
                        </div>
                        <input name="confirmPassword" className="form-control" placeholder="Repeat password" value={this.state.confirmPassword} onChange={this.handleChangeMethod} type="password" />
                    </div>

                    <div>
                        <progress name="progress" className="registerProgress" value={this.state.progress} max="100" />
                        <button type="submit" className="btn btn-primary btn-block"> Create Account  </button>
                    </div>

                </form>
            </div>
        )
    }

    handleChangeMethod(event) {
        this.setState({ [event.target.name]: event.target.value })
    }


}

export default SponsorRegister;

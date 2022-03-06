import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./LogInForm.css";
import "../All.css";

class LogInForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: 'mcwadeya',
            password: 'pass',
            LogInFailed: false,
            LogInSuccess: false,
            ShowPassword: true
        }

        this.handleChangeMethod = this.handleChangeMethod.bind(this)
        this.LogInClicked = this.LogInClicked.bind(this)
        this.handleShowPassword = this.handleShowPassword.bind(this)
        this.RegisterSuccessfullLogIn = this.RegisterSuccessfullLogIn.bind(this)
    }

    render() {
        return (

            <div className="log-in-container">
                {/*<div>
                    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" crossOrigin="anonymous" />
                    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" crossOrigin="anonymous" />
                </div>*/}

                <div className="log-in-header">
                    <h2>Sign In</h2>
                    <div className="d-flex justify-content-end social_icon">
                        <span><i className="fab fa-facebook-square"></i></span>
                        <span><i className="fab fa-google-plus-square"></i></span>
                        <span><i className="fab fa-twitter-square"></i></span>
                    </div>
                </div>
                <div>

                    {this.state.LogInFailed && <div>Log In Failed</div>}

                    <form>
                        <div className="form-control-holder">
                            <div className="">
                                <span className=""><i className=""></i></span>
                            </div>
                            <input className="form-control log-in-form-input" type="text" name="username" value={this.state.username} placeholder="mcwadeya" onChange={this.handleChangeMethod}></input>

                        </div>
                        
                        <div className="form-control-holder">
                            <div className="">
                                <span className=""><i className="fas fa-key"></i></span>
                            </div>
                            <input className="form-control log-in-form-input" type={this.state.ShowPassword ? "password" : "tetx"} name="password" value={this.state.password} placeholder="password" onChange={this.handleChangeMethod}></input>
                        </div>

                        <div className="form-control-holder">
                            <input type="checkbox" name="showPassword" onClick={this.handleShowPassword} /> Show Password
                            <input type="checkbox" name="rememberPassword" />Remember Me
                        </div>

                        <div className="form-control-holder">
                            <button id="log-in-button" className="button" type="button" value="Login" onClick={this.LogInClicked}>Log In</button>
                        </div>
                    </form>
                </div>

                <div className="reset-password">
                    Don't have an account? <Link className="reset-password-links" to="/log">Sign Up</Link><br /><br />
                    Forgot your password? <Link className="reset-password-links" to="/log">Reset</Link>
                </div>
            </div>
        )
    }

    handleChangeMethod(event) {
        this.setState({ [event.target.name]: event.target.value })
    }

    handleShowPassword() {
        (this.state.ShowPassword === true) ? this.setState({ ShowPassword: false}) : this.setState({ showPassword: true })
    }

    LogInClicked() {

        if (this.state.username === 'mcwadeya' && this.state.password === 'pass') {

            this.RegisterSuccessfullLogIn(this.state.username, this.state.password);
            this.props.history.push(`/children-profile`)
            
        } else {
            this.setState({ LogInFailed: true })
            this.setState({ LogInSuccess: false })
        }

    }

    RegisterSuccessfullLogIn(username, password) {
        sessionStorage.setItem('Authenticated-User', username);
        return null;
    }

}

export default LogInForm;
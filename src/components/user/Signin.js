import React, { Component } from 'react'
import './Signin.css'

export default class Signin extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div className="signin">
                <form className="form-setup">
                    <h2 className="mb-4">Sign in</h2>
                    <button class="btn btn-primary d-block mb-3 w-100"> <i class="fab fa-facebook-f"></i> &nbsp;  Sign in with Facebook</button>
                    <button class="btn btn-danger d-block mb-4 w-100"> <i class="fab fa-google"></i> &nbsp;  Sign in with Google</button>
                    <div className="form-group mb-3">
                        <div className="input-group">
                            <div class="input-group-prepend">
                                <span class="input-group-text h-100">
                                    <i className="fa fa-user" />
                                </span>
                            </div>
                            <input name="email "type="email" class="form-control" placeholder="Username" required/>
                        </div>
                    </div>
                    <div className="form-group mb-2">
                        <div className="input-group">
                            <div class="input-group-prepend">
                                <span class="input-group-text h-100">
                                    <i className="fa fa-lock" />
                                </span>
                            </div>
                            <input name="password "type="password" class="form-control" placeholder="Password" required/>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary submit-btn">Log In</button>
                </form>
                <hr />
                <div className="row justify-content-center">
                    <p className="offset-4">Don't have an account? <span className="setup-link text-primary" onClick={() => this.props.change("signup")}>Register</span></p>
                </div>
            </div>
        )
    }
}

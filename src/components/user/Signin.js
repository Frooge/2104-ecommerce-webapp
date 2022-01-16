import React, { Component } from 'react'
import { useNavigate } from 'react-router'
import axios from 'axios'
import $ from 'jquery'
import './Signin.css'

class Signin extends Component {
    constructor(props){
        super(props);
        this.change = props.change;
        this.navigate = props.navigate;
    }


    handleFormSubmit = (e) => {
        e.preventDefault();

        let value = $('#signin-form').serializeArray(),
        obj = {};
        $(value).each(function(i , field){
            obj[field.name] = field.value;
        });

        axios.get(`${require('../../config/api')}verification.php?email=${obj['email']}&password=${obj['password']}`)
        .then((res) => {
            console.log(res);
            if(!res.data){
                alert("Incorrect email or password");
            }
            else {
                alert("Successful");
                this.navigate('/');
            }
        })
        .catch((res) => {
            console.log(res);
        });
    }

    render() {
        return (
            <div className="signin">
                <form className="form-setup" id="signin-form">
                    <h2 className="mb-4">Sign in</h2>
                    <button className="btn btn-primary d-block mb-3 w-100"> <i className="fab fa-facebook-f"></i> &nbsp;  Sign in with Facebook</button>
                    <button className="btn btn-danger d-block mb-4 w-100"> <i className="fab fa-google"></i> &nbsp;  Sign in with Google</button>
                    <div className="form-group mb-3">
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text h-100">
                                    <i className="fa fa-user" />
                                </span>
                            </div>
                            <input name="email" type="email" className="form-control" placeholder="Username" required/>
                        </div>
                    </div>
                    <div className="form-group mb-2">
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text h-100">
                                    <i className="fa fa-lock" />
                                </span>
                            </div>
                            <input name="password" type="password" className="form-control" placeholder="Password" required/>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary submit-btn" onClick={this.handleFormSubmit}>Log In</button>
                </form>
                <hr />
                <div className="row justify-content-center">
                    <p className="offset-4">Don't have an account? <span className="setup-link text-primary" onClick={() => this.change("signup")}>Register</span></p>
                </div>
            </div>
        )
    }
}

export default function(props) {
    const navigate = useNavigate();

    return <Signin navigate={navigate} change={props.change} />
}

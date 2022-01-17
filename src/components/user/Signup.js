import React, { Component } from 'react'
import axios from 'axios'
import $ from 'jquery'
import './Signup.css'

export default class Signup extends Component {

    handleFormSubmit = (e) => {
        e.preventDefault();

        let value = $('#signup-form').serializeArray(),
        obj = {};
        $(value).each(function(i , field){
            obj[field.name] = field.value;
        });

        if(obj['password'] !== obj['confirm-password']){
            alert("Incorrect confirm password");
        }
        else {
            let data = new FormData();
            data.append('typeID', 1);
            data.append('email', obj["email"]);
            data.append('password', obj["password"]);
            data.append('fullname', `${obj["first-name"]} ${obj["last-name"]}`);
            data.append('birthdate', obj["bdate"]);
            data.append('address', obj["address"]);
            data.append('contact', obj["contact"]);

            axios.post(`${require('../../config/api')}account.php`, data)
            .then((res) => {
                console.log(res);
                if(!res.data){
                    alert("Email has already been taken");
                }
                else {
                    alert("Account created successfully!");
                    this.props.change("signin");
                }
            })
            .catch((err) => {
                console.log(err);
            });
        }
    }

    render() {
        return (
            <div className="signup">
                <form className="form-setup" id="signup-form" onSubmit={this.handleFormSubmit}>
                    <h2 className="mb-3">Sign up</h2>
                    <div className="row form-row mb-3">
                        <div className="form-group col">
                            <label>First Name</label>
                            <input name="first-name" type="text" className="form-control" /> 
                        </div>
                        <div className="form-group col">
                            <label>Last Name</label>
                            <input name="last-name" type="text" className="form-control" /> 
                        </div>
                    </div>
                    <div className="row form-row mb-3">
                        <div className="form-group col">
                            <label>Email</label>
                            <input name="email" type="email" className="form-control" placeholder="Email" /> 
                        </div>
                    </div>
                    <div className="row form-row mb-3">
                        <div className="form-group col">
                            <label>Address</label>
                            <input name="address" type="text" className="form-control" placeholder="City/Municipality Province" /> 
                        </div>
                    </div>
                    <div className="row form-row mb-3">
                        <div className="form-group col">
                            <label>Phone</label>
                            <input name="contact" type="text" className="form-control" placeholder="Phone number" /> 
                        </div>
                        <div className="form-group col">
                            <label>Birtdate</label>
                            <input name="bdate" type="date" className="form-control" /> 
                        </div>
                    </div>
                    
                    <div className="row form-row mb-3">
                        <div className="form-group col">
                            <label>Password</label>
                            <input name="password" type="password" className="form-control" placeholder="Password" required/>  
                        </div>
                        <div className="form-group col">
                            <label>Confirm Password</label>
                            <input name="confirm-password" type="password" className="form-control" placeholder="Confirm Password" required/> 
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary submit-btn">Register</button>
                </form>
                <hr />
                <div className="row justify-content-center">
                    <p className="col-sm-5">Have an account? <span className="setup-link text-primary" onClick={() => this.props.change("signin")}>Log In</span></p>
                </div>
            </div>
        )
    }
}

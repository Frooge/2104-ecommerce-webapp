import React, { Component } from 'react'
import Signin from '../components/user/Signin'
import Signup from '../components/user/Signup'

export default class Setup extends Component {
    constructor(){
        super();
        this.state = {
            mode: "signin"
        }
    }

    render() {
        return (
            <div className="bg-dark">
                {this.state.mode === "signin" ? (<Signin />) : (<Signup />)}
            </div>
        )
    }
}

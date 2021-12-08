import React, { Component } from 'react'
import Signin from '../components/user/Signin'
import Signup from '../components/user/Signup'
import './Setup.css'

export default class Setup extends Component {
    constructor(){
        super();
        this.state = {
            mode: "signin"
        }
    }

    changeMode = (mode) => {
        this.setState({
            mode: mode
        })
    }

    render() {
        return (
            <div className="setup container-fluid">
                {this.state.mode === "signin" ? (<Signin change={this.changeMode} />) : (<Signup change={this.changeMode} />)}
            </div>
        )
    }
}

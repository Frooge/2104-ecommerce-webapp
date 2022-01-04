import React, { Component } from 'react'
import logo from '../../img/mf_logo.png'
import './Sidenav.css'

export default class Sidenav extends Component {
    render() {
        return (
            <div className="sidenav">
                <div style={{textAlign:'center'}}>
                <img className="navbar-brand" src={logo} alt="mcford logo"/>
                <h2>Mcford Milktea</h2>
                </div>
                <hr />
                <a>Transaction</a>
                <hr />
                <a>Delivery</a>
                <hr />
                <a>Products</a>
                <hr />
                <a>Graph</a>
            </div>
        )
    }
}

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
                <a href="#transaction">Transaction</a>
                <hr />
                <a href="#delivery">Delivery</a>
                <hr />
                <a href="#products">Products</a>
                <hr />
                <a href="#graph">Graph</a>
            </div>
        )
    }
}

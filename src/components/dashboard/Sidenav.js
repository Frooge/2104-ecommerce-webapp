import React, { Component } from 'react'
import logo from '../../img/mf_logo.png'
import { HashLink as Link} from 'react-router-hash-link'
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
                <Link to="/dashboard#transaction">Transaction</Link>
                <hr />
                <Link to="/dashboard#delivery">Delivery</Link>
                <hr />
                <Link to="/dashboard#products">Products</Link>
                {/* <hr />
                <Link to="/dashboard#graph">Graph</Link> */}
            </div>
        )
    }
}

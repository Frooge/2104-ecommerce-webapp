import React, { Component } from 'react'
import './InfoCard.css'

export default class InfoCard extends Component {
    render() {
        return (
            <div className="justify-content-between" style={{display:'flex'}}>
                <div className="info-card col-3">
                    <label>Products</label>
                    <h2>999</h2>
                </div>
                <div className="info-card col-3">
                    <label>Transactions</label>
                    <h2>999</h2>
                </div>
                <div className="info-card col-3">
                    <label>Earnings</label>
                    <h2>999</h2>
                </div>
                <div className="info-card col-3">
                    <label>Sales</label>
                    <h2>999</h2>
                </div>
            </div>
        )
    }
}

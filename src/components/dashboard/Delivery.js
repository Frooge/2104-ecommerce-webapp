import React, { Component } from 'react'
import './Delivery.css'

export default class Delivery extends Component {
    render() {
        return (
            <div className="delivery">
                <div className="row">
                    <span className="col-10">
                        <h3>Delivery Requests</h3>
                    </span>
                    <div className="col-2 dash-btn">
                        <button className="btn btn-primary w-100">VIEW ALL</button>
                    </div>
                </div>
                <hr />
                <div className="row">
                    <div className="col-1">
                        <label><strong>ID</strong></label>
                    </div>
                    <div className="col-4">
                        <label><strong>Name</strong></label>
                    </div>
                    <div className="col-4">
                        <label><strong>Address</strong></label>
                    </div>
                    <div className="col-2">
                        <label><strong>Status</strong></label>
                    </div>
                    <div className="col-1">
                        <label><strong>Total</strong></label>
                    </div>
                </div>
                <div className="row delivery-items">
                    <div className="col-1">
                        1
                    </div>
                    <div className="col-4">
                        Sample
                    </div>
                    <div className="col-4">
                        Cebu City Blah Blah Blah
                    </div>
                    <div className="col-2">
                        Ongoing
                    </div>
                    <div className="col-1">
                        P220
                    </div>
                </div>
            </div>
        )
    }
}

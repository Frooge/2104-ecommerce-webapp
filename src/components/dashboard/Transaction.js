import React, { Component } from 'react'
import axios from 'axios'
import { Spinner } from 'react-bootstrap';
import './Transaction.css'

export default class Transaction extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            orders: [],
        };
    }

    componentDidMount() {
        axios.get(`${require('../../config/api')}order.php`)
        .then((res) => {
            console.log(res);
            this.setState({
                isLoading: false,
                orders: res.data
            })
        })
        .catch((err) => {
            console.log(err);
        })
    }

    render() {
        return (
            <div className="transaction">
                <div className="row">
                    <span className="col-10">
                        <h3>Transactions</h3>
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
                    <div className="col-6">
                        <label><strong>Name</strong></label>
                    </div>
                    <div className="col-2">
                        <label><strong>Method</strong></label>
                    </div>
                    <div className="col-2">
                        <label><strong>Date</strong></label>
                    </div>
                    <div className="col-1">
                        <label><strong>Partial</strong></label>
                    </div>
                </div>
                <div className="row transaction-items">
                    <div className="col-1">
                        1
                    </div>
                    <div className="col-6">
                        Sample
                    </div>
                    <div className="col-2">
                        Delivery
                    </div>
                    <div className="col-2">
                        01/01/2020
                    </div>
                    <div className="col-1">
                        P200
                    </div>
                </div>
                
            </div>
        )
    }
}

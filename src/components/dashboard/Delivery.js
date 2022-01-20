import React, { Component } from 'react'
import axios from 'axios'
import $ from 'jquery'
import { Spinner } from 'react-bootstrap'
import './Delivery.css'

export default class Delivery extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            delivery: [],
            search: ''
        };
    }

    componentDidMount() {
        this.getDelivery();
    }

    getDelivery = () => {
        axios.get(`${require('../../config/api')}delivery.php`)
        .then((res) => {
            console.log(res);
            this.setState({
                isLoading: false,
                delivery: res.data
            })
        })
        .catch((err) => {
            console.log(err);
        })
    }

    handleFormButton = (e, status, id) => {
        e.preventDefault();

        let data = new FormData();
        data.append('status', status)
        data.append('mode', 'STATUS')
        data.append('delivery', id);

        // for (var pair of data.entries()) {
        //     console.log(pair[0]+ ', ' + pair[1]); 
        // }

        axios.post(`${require('../../config/api')}delivery.php`, data)
        .then((res) => {
            console.log(res);
            this.setState({
                isLoading: true,
            }, this.getDelivery);
        })
        .catch((err) => {
            console.log(err);
        })
    }

    handleSearch = (e) => {
        e.preventDefault();

        let value = $('#transaction-search-form').serializeArray(),
        obj = {};
        $(value).each(function(i , field){
            obj[field.name] = field.value;
        });

        this.setState({
            isLoading: true,
            search: obj["search"]
        }, this.getTransactions);
    }

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
                    <div className="col-2">
                        <label><strong>Name</strong></label>
                    </div>
                    <div className="col-2">
                        <label><strong>Address</strong></label>
                    </div>
                    <div className="col-2">
                        <label><strong>Status</strong></label>
                    </div>
                    <div className="col-4">
                        <label><strong>Options</strong></label>
                    </div>
                    <div className="col-1" />
                </div>
                {(this.state.isLoading) ? (
                    <div style={{textAlign:'center'}}>
                        <Spinner animation="border" role="status"  style={{textAlign:'center'}}>
                            <span className="visually-hidden">Loading...</span>
                        </Spinner>
                    </div>
                ) : (this.state.delivery.length > 0) ? this.state.delivery.map((d, index) => (
                    <div className="row delivery-display-row" key={d.OrderID} style={{backgroundColor:(index%2)?'#324052':'#4e5e73'}}>
                        <div className="col-1 align-self-center">
                            <label>{d.DeliveryID}</label>
                        </div>
                        <div className="col-2 align-self-center">
                            <label>#{d.UserID} - {d.FullName}</label>
                        </div>
                        <div className="col-2 align-self-center">
                            <label>{d.ShippingAddress}</label>
                        </div>
                        <div className="col-2 align-self-center">
                            <label className={d.DeliveryStatus}>{d.DeliveryStatus}</label>
                        </div>
                        <div className="col-4 align-self-center">
                            <form id="status-button-form">
                                <div class="btn-group btn-group-toggle" data-toggle="buttons">
                                    <label htmlFor={'options-' + d.DeliveryID + '-1'}
                                    className={[
                                        "btn btn-warning delivery-status-btn delivery-status",
                                        (d.DeliveryStatus === 'ONGOING') ? '-active' : ''
                                    ].join('')}
                                    onClick={(e) => this.handleFormButton(e, 'ONGOING', d.DeliveryID)}>
                                        Ongoing
                                    </label>
                                    <label htmlFor={'options-' + d.DeliveryID + '-2'}
                                    className={[
                                        "btn btn-success delivery-status-btn delivery-status",
                                        (d.DeliveryStatus === 'SUCCESSFUL') ? '-active' : ''
                                    ].join('')}
                                    onClick={(e) => this.handleFormButton(e, 'SUCCESSFUL', d.DeliveryID)}>
                                        Success
                                    </label>
                                    <label htmlFor={'options-' + d.DeliveryID + '-3'}
                                    className={[
                                        "btn btn-danger delivery-status-btn delivery-status",
                                        (d.DeliveryStatus === 'DENIED') ? '-active' : ''
                                    ].join('')}
                                    onClick={(e) => this.handleFormButton(e, 'DENIED', d.DeliveryID)}>
                                        Deny
                                    </label>
                                </div> 
                            </form> 
                        </div>
                        <div className="col-1 align-self-center">
                            <span><i className="fas fa-edit" /></span>
                        </div>
                    </div>
                )) : (
                    <div>
                        <h3>No Delivery</h3>
                    </div>
                )}
                
            </div>
        )
    }
}

import React, { Component } from 'react'
import axios from 'axios'
import './CartItem.css'

export default class CartItem extends Component {
    constructor(props){
        super(props);
        this.item = this.props.item;
        this.image = require(`../../img/${this.item.ProductImage}`).default;
    }

    handleButtonClick = (e) => {
        e.preventDefault();

        let data = new FormData();
        data.append('item', this.item.ItemID);
        data.append('mode', 'DELETE');

        axios.post(`${require('../../config/api')}cart.php`, data)
        .then((res) => {
            console.log(res);
            window.location.reload();
        })
        .catch((err) => {
            console.log(err);
        })
    }

    render() {
        return (
            <div className="cart-item row">
                <div className="col-2">
                    <img className="cart-item-image" src={this.image} alt="item"/>
                </div>
                <div className="col-3">
                    <h5>{this.item.ProductName}</h5>
                    <label>Type: {this.item.TypeName}</label>
                    <p>From: {this.item.StoreName}</p>
                </div>
                <div className="col-2">
                    <p>{this.item.AddOns}</p>
                </div>
                <div className="col-2">
                    <p>{this.item.Quantity}</p>
                </div>
                <div className="col-1">
                    <p>{'₱' + this.item.PartialPrice}</p>
                </div>
                <div className="col-2 cart-item-remove">
                    <button className="btn btn-danger" onClick={this.handleButtonClick}>Remove</button>
                </div>
                <hr className="mt-4"/>
            </div>
        )
    }
}

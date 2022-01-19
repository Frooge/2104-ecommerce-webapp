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
                <div className="col-sm-2">
                    <img className="cart-item-image" src={this.image} alt="item"/>
                </div>
                <div className="col-sm-3">
                    {this.item.ProductName}
                    <br />
                    {this.item.NameType}
                </div>
                <div className="col-sm-2">
                    {this.item.AddOns}
                </div>
                <div className="col-sm-2">
                    {this.item.Quantity}
                </div>
                <div className="col-sm-1">
                    {'₱' + this.item.PartialPrice}
                </div>
                <div className="col-sm-1">
                    <button className="btn btn-danger" onClick={this.handleButtonClick}>Remove</button>
                </div>
            </div>
        )
    }
}

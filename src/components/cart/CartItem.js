import React, { Component } from 'react'
import './CartItem.css'

export default class CartItem extends Component {
    constructor(){
        super();
        this.image = require('../../img/placeholder.png').default;
    }

    render() {
        return (
            <div className="cart-item row">
                <div className="col-sm-2">
                    <img className="cart-item-image" src={this.image} alt="item"/>
                </div>
                <div className="col-sm-3">
                    Name
                    <br />
                    Product Type
                </div>
                <div className="col-sm-2">
                    Extras
                </div>
                <div className="col-sm-2">
                    Quantity
                </div>
                <div className="col-sm-1">
                    Price
                </div>
                <div className="col-sm-1">
                    <button className="btn btn-danger">Remove</button>
                </div>
            </div>
        )
    }
}

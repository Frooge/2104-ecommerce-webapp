import React, { Component } from 'react'
import './CartItem.css'

export default class CartItem extends Component {
    constructor(){
        super();
        this.image = require('../../img/placeholder.png').default;
    }

    render() {
        return (
            <div className="CartItem container">
                <div className="row">
                    <div className="col">
                        <img className="cart-item-image" src={this.image} alt="item"/>
                    </div>
                    <div className="col">
                        Name
                    </div>
                    <div className="col">
                        Extras and quantity
                    </div>
                    <div className="col">
                        Price
                    </div>
                    <div className="col">
                        x - icon
                    </div>
                </div>
            </div>
        )
    }
}

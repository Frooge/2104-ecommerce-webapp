import React, { Component } from 'react'
import './CartDisplay.css'
import CartBox from './CartBox'
import CartCheckout from './CartCheckout'

export default class CartDisplay extends Component {
    render() {
        return (
            <div className="CartDisplay container">
                <div className="row">
                    <div className="col-10">
                        <h2 className="your-cart">Your cart</h2>
                    </div>
                    <div className="col-2">
                        <CartCheckout />
                    </div>
                </div>
                <CartBox />
                <CartCheckout />
            </div>
        )
    }
}

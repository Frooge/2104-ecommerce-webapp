import React, { Component } from 'react'
import CartItem from './CartItem'
import './CartBox.css'

export default class CartBox extends Component {
    render() {
        return (
            <div className="cart-box">
                <CartItem />
                <CartItem />
                <CartItem />
                <CartItem />
                <CartItem />
                <CartItem />
                <hr />
                <div className="row">
                    <div className="col-10">
                        <p>Subtotal</p>
                        <p>Shipping is calculated at checkout</p>
                    </div>
                    <div className="col-2">
                        Price Here
                    </div>
                </div>
            </div>
        )
    }
}

import React, { Component } from 'react'
import CartItem from './CartItem'
import './CartBox.css'

export default class CartBox extends Component {
    render() {
        return (
            <div className="cart-box">
                <div className="row">
                    <label className="col-sm-5">PRODUCT</label>
                    <label className="col-sm-2">EXTRAS</label>
                    <label className="col-sm-2">QUANTITY</label>
                    <label className="col">PRICE</label>
                </div>
                <hr />
                <CartItem />
                <CartItem />
                <CartItem />
                <CartItem />
                <CartItem />
                <CartItem />
            </div>
        )
    }
}

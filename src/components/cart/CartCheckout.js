import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './CartCheckout.css'

export default class CartCheckout extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div className="cart-checkout">
                <div className="row">
                    <label className="col">Subtotal:</label>
                    <label className="col">Price here</label>
                </div>
                <hr />
                <button className="btn btn-warning w-100 mb-3" onClick={() => this.props.setShowModal(true)}>Checkout</button>
                <Link to="/products"><button className="btn btn-secondary w-100">Continue shopping</button></Link>
            </div>
        )
    }
}

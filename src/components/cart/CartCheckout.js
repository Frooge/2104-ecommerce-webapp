import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import CartDelivery from './CartDelivery'
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
                    <label className="col"><strong>{'₱' + this.props.total}</strong></label>
                </div>
                <hr />
                <CartDelivery items={this.props.items} id={this.props.id} total={this.props.total}/>
                <Link to="/products"><button className="btn btn-secondary w-100">Continue shopping</button></Link>
            </div>
        )
    }
}

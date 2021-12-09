import React, { Component } from 'react'
import './CartDisplay.css'
import CartBox from './CartBox'
import CartCheckout from './CartCheckout'
import DeliveryInfo from './DeliveryInfo'

export default class CartDisplay extends Component {
    constructor(){
        super();
        this.state = {
            showModal: false
        }
    }

    setShowModal = (show) => {
        this.setState({
            showModal: show
        })
    }

    render() {
        return (
            <div className="cart-display container">
                <h2 className="your-cart">Your cart</h2>
                <div className="row">
                    <div className="col-sm-10">
                        <CartBox />
                    </div>
                    <div className="col-sm-2">
                        <CartCheckout setShowModal={this.setShowModal}/>
                    </div>
                </div>
                <DeliveryInfo key={this.state.showModal} show={this.state.showModal} setShowModal={this.setShowModal}/>
            </div>
        )
    }
}

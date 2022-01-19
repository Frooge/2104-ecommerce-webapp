import React, { Component } from 'react'
import CartBox from './CartBox'
import CartCheckout from './CartCheckout'
import DeliveryInfo from './DeliveryInfo'
import axios from 'axios'
import './CartDisplay.css'


export default class CartDisplay extends Component {
    constructor(props){
        super(props);
        this.state = {
            showModal: false,
            isLoading: true,
            items: {},
        }
    }

    componentDidMount() {
        axios.get(`${require('../../config/api')}cart.php?user=${this.props.id}`)
        .then((res) => {
            this.setState({
                isLoading: false,
                items: res.data
            })
        })
        .catch((err) => {
            console.log(err);
        })
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
                        <CartBox isLoading={this.state.isLoading} items={this.state.items}/>
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

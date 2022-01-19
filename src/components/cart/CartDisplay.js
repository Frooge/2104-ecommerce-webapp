import React, { Component } from 'react'
import CartBox from './CartBox'
import CartCheckout from './CartCheckout'
import axios from 'axios'
import './CartDisplay.css'


export default class CartDisplay extends Component {
    constructor(props){
        super(props);
        this.state = {
            isLoading: true,
            items: [],
            total: 0
        }
    }

    componentDidMount() {
        axios.get(`${require('../../config/api')}cart.php?user=${this.props.id}`)
        .then((res) => {
            this.setState({
                isLoading: false,
                items: res.data
            }, () => {
                let price = 0;
                this.state.items.map((i) => {
                    price += parseInt(i.PartialPrice);
                })
                this.setState({
                    total: price
                })
            })
        })
        .catch((err) => {
            console.log(err);
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
                        <CartCheckout setShowModal={this.setShowModal} items={this.state.items} total={this.state.total} id={this.props.id}/>
                    </div>
                </div>
            </div>
        )
    }
}

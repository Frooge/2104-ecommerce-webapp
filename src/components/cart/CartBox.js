import React, { Component } from 'react'
import CartItem from './CartItem'
import { Spinner } from 'react-bootstrap'
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
                {(this.props.isLoading) ? (
                    <div style={{textAlign:'center'}}>
                        <Spinner animation="border" role="status"  >
                            <span className="visually-hidden">Loading...</span>
                        </Spinner>
                    </div>
                ) : this.props.items.map((i) => (
                    <CartItem key={i.ItemID} item={i}/>
                ))}
            </div>
        )
    }
}

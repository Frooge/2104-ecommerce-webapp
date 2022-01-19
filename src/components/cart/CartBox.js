import React, { Component } from 'react'
import CartItem from './CartItem'
import { Spinner } from 'react-bootstrap'
import './CartBox.css'

export default class CartBox extends Component {
    render() {
        return (
            <div className="cart-box">
                <div className="row">
                    <label className="col-sm-5"><strong>PRODUCT</strong></label>
                    <label className="col-sm-2"><strong>EXTRAS</strong></label>
                    <label className="col-sm-2"><strong>QUANTITY</strong></label>
                    <label className="col"><strong>PRICE</strong></label>
                </div>
                <hr />
                {(this.props.isLoading) ? (
                    <div style={{textAlign:'center'}}>
                        <Spinner animation="border" role="status"  >
                            <span className="visually-hidden">Loading...</span>
                        </Spinner>
                    </div>
                ) : (this.props.items.length > 0) ? this.props.items.map((i) => (
                    <CartItem key={i.ItemID} item={i}/>
                )) : (
                    <div>
                        <h2>No items in cart</h2>
                    </div>
                )}
            </div>
        )
    }
}

import React, { Component } from 'react'
import './ItemOrder.css'

export default class ItemOrder extends Component {
    render() {
        return (
            <div className="item-order">
                <form>
                    <div className="select-item">
                        <input className="form-control w-50" type="text" placeholder="Quantity" />
                    </div>
                    <div className="select-item">
                        <button className="btn btn-secondary btn-sm w-100">Add to cart</button>
                    </div>
                    <div className="select-item">
                        <button type="submit" className="btn btn-warning btn-lg w-100">Buy it now</button>
                    </div>
                </form>
            </div>
        )
    }
}

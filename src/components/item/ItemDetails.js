import React, { Component } from 'react'
import './ItemDetails.css'

export default class ItemDetails extends Component {
    render() {
        return (
            <div className="item-details">
                <h2>{this.props.productName}</h2>
                <p>{this.props.storeName}</p>
                <h3>{this.props.price}</h3>
                <p>
                {this.props.description}
                </p>
            </div>
        )
    }
}

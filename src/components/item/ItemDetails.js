import React, { Component } from 'react'
import './ItemDetails.css'

export default class ItemDetails extends Component {

    render() {
        return (
            <div className="item-details">
                <h1>{this.props.product.ProductName}</h1>
                <p>{this.props.product.TypeName}</p>
                <p>{this.props.product.Description}</p>
                <label>Price</label>
                <div className="row">   
                    <div className="col-2">
                        <label>Regular</label>
                        <h3>{'₱' + this.props.product.RegularPrice}</h3>
                    </div>
                    <div className="col-2">
                        <label>Large</label>
                        <h3>{'₱' + this.props.product.LargePrice}</h3> 
                    </div>
                </div>
            </div>
        )
    }
}

import React, { Component } from 'react'
import ItemImage from './ItemImage'
import ItemDetails from './ItemDetails'
import ItemOrder from './ItemOrder'
import './ItemDisplay.css'

export default class ItemDisplay extends Component {

    render() {
        return (
            <div className="item-display container">
                <div className="row">
                    <div className="col">
                        <ItemImage image={this.props.product.ProductImage}/>
                    </div>
                    <div className="col-5">
                        <ItemDetails
                        productName={this.props.product.ProductName}
                        storeName={this.props.product.StoreName}
                        price={this.props.product.Price}
                        description={this.props.product.Description}
                        />
                    </div>
                    <div className="col-3">
                        <ItemOrder />
                    </div>
                </div>
                
            </div>
        )
    }
}

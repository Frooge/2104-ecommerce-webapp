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
                        <ItemDetails product={this.props.product}/>
                    </div>
                    <div className="col-3">
                        <ItemOrder product={this.props.product}/>
                    </div>
                </div>
                
            </div>
        )
    }
}

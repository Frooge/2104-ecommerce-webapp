import React, { Component } from 'react'
import './ProductCard.css'

class ProductCard extends Component {
    constructor(){
        super();
        this.image = require('../../img/placeholder.png').default;
    }

    render() {
        return (
            <div className="product-card col-sm-3">
                <div className="product-item">
                    <a className="product-link" href="/products/item">
                        <img className="product-image" src={this.image} alt="product" />
                        <h2>Product Name</h2>
                        <p>Store name</p>
                        <h3>Price</h3>
                    </a>
                </div>
            </div>
        )
    }
}

export default ProductCard;
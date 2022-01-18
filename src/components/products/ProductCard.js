import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './ProductCard.css'

class ProductCard extends Component {
    constructor(props){
        super(props);
        this.product = this.props.product;
        this.image = require(`../../img/${this.product.ProductImage}`).default;
    }

    render() {
        return (
            <div className="product-card col-sm-3">
                <div className="product-item">
                    <a className="product-link" href={'/products/item?p_id=' + this.product.ProductID}>
                        <div className="product-card-image">
                            <img className="product-image" src={this.image} alt="product" />
                        </div>
                        <h2>{this.product.ProductName}</h2>
                        <p>{this.product.TypeName}</p>
                        <h3>{'₱' + this.product.RegularPrice}</h3>
                    </a>
                </div>
            </div>
        )
    }
}

export default ProductCard;
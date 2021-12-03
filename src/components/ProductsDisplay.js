import React, { Component } from 'react'
import ProductCard from './ProductCard';
import './ProductsDisplay.css'

class ProductsDisplay extends Component {
    render() {
        return (
            <div className="ProductsDisplay bg-dark">
                <div className="container">
                    <p className="product-heading">Products</p>
                    <div className="row">
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                    </div>
                </div>
            </div>
        )
    }
}

export default ProductsDisplay;

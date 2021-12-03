import React, { Component } from 'react'
import ProductCard from '../products/ProductCard'
import './ItemSuggest.css'

export default class ItemSuggest extends Component {
    render() {
        return (
            <div className="ItemSuggest container">
                <p>Products that are related to this item:</p>
                <div className="row">
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </div>
            </div>
        )
    }
}

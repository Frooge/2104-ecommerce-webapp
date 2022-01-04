import React, { Component } from 'react'
import './ProductsTab.css'

export default class ProductsTab extends Component {
    render() {
        return (
            <div className="products-tab">
               <div className="row">
                    <span className="col-9">
                        <h3>All Products</h3>
                    </span>
                    <div className="col-2 align-self-center">
                        <button className="btn btn-primary w">VIEW ALL</button>
                    </div>
                    <div className="col-1 align-self-center">
                        <button className="btn btn-primary w">ADD</button>
                    </div>
                </div>
                <hr />
                <div className="row">
                    <div className="col-1">
                        <label><strong>ID</strong></label>
                    </div>
                    <div className="col-2">
                        <label><strong>Type</strong></label>
                    </div>
                    <div className="col-4">
                        <label><strong>Name</strong></label>
                    </div>
                    <div className="col-2">
                        <label><strong>Store</strong></label>
                    </div>
                    <div className="col-2">
                        <label><strong>Out of Stock</strong></label>
                    </div>
                    <div className="col-1">
                        <label><strong>Price</strong></label>
                    </div>
                </div>
                <div className="row products-tab-items">
                    <div className="col-1">
                        1
                    </div>
                    <div className="col-2">
                        Milktea
                    </div>
                    <div className="col-4">
                        Sample
                    </div>
                    <div className="col-2">
                        Main Store
                    </div>
                    <div className="col-2">
                        NO
                    </div>
                    <div className="col-1">
                        P185
                    </div>
                </div>
            </div>
        )
    }
}

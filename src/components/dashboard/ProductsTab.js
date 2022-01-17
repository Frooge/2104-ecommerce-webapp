import React, { Component } from 'react'
import { Form, FormControl, Button } from 'react-bootstrap'
import ProductsTabModal from './ProductsTabModal'
import './ProductsTab.css'

export default class ProductsTab extends Component {

    render() {
        return (
            <div className="products-tab">
               <div className="row">
                    <span className="col-6">
                        <h3>Products</h3>
                    </span>
                    <Form className="d-flex col-4">
                        <FormControl
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="success">Search</Button>
                    </Form>
                    <div className="col-2 dash-btn">
                        <ProductsTabModal content="ADD"/>
                    </div>
                </div>
                <hr />
                <div className="row">
                    <div className="col">
                        <label><strong>ID</strong></label>
                    </div>
                    <div className="col">
                        <label><strong>Type</strong></label>
                    </div>
                    <div className="col">
                        <label><strong>Store</strong></label>
                    </div>
                    <div className="col">
                        <label><strong>Name</strong></label>
                    </div>
                    <div className="col">
                        <label><strong>Size</strong></label>
                    </div>
                    <div className="col">
                        <label><strong>Price</strong></label>
                    </div>
                    <div className="col">
                        <label><strong>Available</strong></label>
                    </div>
                    <div className="col">
                        <label><strong>Description</strong></label>
                    </div>
                    <div className="col" />
                </div>
                <br />
                <div className="row">
                    <div className="col">
                        <label>ID</label>
                    </div>
                    <div className="col">
                        <label>Type</label>
                    </div>
                    <div className="col">
                        <label>Store</label>
                    </div>
                    <div className="col">
                        <label>Name</label>
                    </div>
                    <div className="col">
                        <label>Size</label>
                    </div>
                    <div className="col">
                        <label>Price</label>
                    </div>
                    <div className="col">
                        <label>Available</label>
                    </div>
                    <div className="col">
                        <label>Description</label>
                    </div>
                    <div className="col  dash-btn">
                        <ProductsTabModal content="EDIT"/>
                    </div>
                </div>
            </div>
        )
    }
}

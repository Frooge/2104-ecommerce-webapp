import React, { Component } from 'react'
import { Form, FormControl, Button, Spinner } from 'react-bootstrap'
import ProductsTabModal from './ProductsTabModal'
import axios from 'axios'
import $ from 'jquery'
import './ProductsTab.css'

export default class ProductsTab extends Component {
    constructor(props){
        super(props);
        this.state = {
            isLoadingProducts: true,
            products: {},
            search: '',
        }
    }

    componentDidMount() {
        this.getProducts();
    }

    getProducts = () => {
        console.log("hello", this.state.search);
        axios.get(`${require('../../config/api')}product.php?search=${this.state.search}`)
        .then((res) => {
            console.log(res);
            this.setState({
                isLoadingProducts: false,
                products: res.data
            })
        })
        .catch((err) => {
            console.log(err);
        })
    }

    handleSearch = (e) => {
        e.preventDefault();

        let value = $('#search-form').serializeArray(),
        obj = {};
        $(value).each(function(i , field){
            obj[field.name] = field.value;
        });

        this.setState({
            isLoadingProducts: true,
            search: obj["search"]
        }, this.getProducts);
    }

    render() {
        return (
            <div className="products-tab">
               <div className="row">
                    <span className="col-6">
                        <h3>Products</h3>
                    </span>
                    <Form className="d-flex col-4" id="search-form" onSubmit={this.handleSearch}>
                        <FormControl
                            type="search"
                            name="search"
                            placeholder="Search by name"
                            className="me-2"
                            aria-label="Search by name"
                        />
                        <Button type="submit" variant="success">Search</Button>
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
                <div style={{textAlign:'center'}}>
                    { (this.state.isLoadingProducts)?
                        (
                            <Spinner animation="border" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </Spinner>
                        ) : this.state.products.map((p) => (
                                <div className="row" key={p.ProductID}>
                                    <div className="col">
                                        <label>{p.ProductID}</label>
                                    </div>
                                    <div className="col">
                                        <label>{p.TypeName}</label>
                                    </div>
                                    <div className="col">
                                        <label>{p.StoreName}</label>
                                    </div>
                                    <div className="col">
                                        <label>{p.ProductName}</label>
                                    </div>
                                    <div className="col">
                                        <label>{p.Size}</label>
                                    </div>
                                    <div className="col">
                                        <label>{p.Price}</label>
                                    </div>
                                    <div className="col">
                                        <label>{(p.isAvailable === "1")? "YES" : "NO"}</label>
                                    </div>
                                    <div className="col">
                                        <label>{p.Description}</label>
                                    </div>
                                    <div className="col  dash-btn">
                                        <ProductsTabModal content="EDIT" product={p}/>
                                    </div>
                                </div>
                            )
                        )
                    }
                </div>
            </div>
        )   
    }
}

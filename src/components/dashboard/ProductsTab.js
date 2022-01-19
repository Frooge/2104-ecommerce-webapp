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

    updateDisplay = (e) => {
        this.setState({
            isLoadingProducts: true,
            search: ''
        }, this.getProducts);
    }

    handleSearch = (e) => {
        e.preventDefault();

        let value = $('#product-search-form').serializeArray(),
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
                    <Form className="d-flex col-4" id="product-search-form" onSubmit={this.handleSearch}>
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
                        <ProductsTabModal content="ADD" updateDisplay={this.updateDisplay}/>
                    </div>
                </div>
                <hr />
                <div>
                    <div className="row">
                        <div className="col-1">
                            <label><strong>ID</strong></label>
                        </div>
                        <div className="col-1">
                            <label><strong>Type</strong></label>
                        </div>
                        <div className="col">
                            <label><strong>Name</strong></label>
                        </div>
                        <div className="col">
                            <label><strong>Store</strong></label>
                        </div>
                        <div className="col-1">
                            <label><strong>Regular</strong></label>
                        </div>
                        <div className="col-1">
                            <label><strong>Large</strong></label>
                        </div>
                        <div className="col-1">
                            <label><strong>Available</strong></label>
                        </div>
                        <div className="col-1" />
                    </div>
                    <br />
                    { (this.state.isLoadingProducts)?
                        (
                            <Spinner animation="border" role="status"  style={{textAlign:'center'}}>
                                <span className="visually-hidden">Loading...</span>
                            </Spinner>
                        ) : this.state.products.map((p, index) => (
                                <div className="row product-display-row" key={p.ProductID} style={{backgroundColor:(index%2)?'#324052':'#4e5e73'}}>
                                    <div className="col-1 align-self-center">
                                        <label>{p.ProductID}</label>
                                    </div>
                                    <div className="col-1 align-self-center">
                                        <label>{p.TypeName}</label>
                                    </div>
                                    <div className="col align-self-center">
                                        <label>{p.ProductName}</label>
                                    </div>
                                    <div className="col align-self-center">
                                        <label>{p.StoreName}</label>
                                    </div>
                                    <div className="col-1 align-self-center">
                                        <label>{'₱' + p.RegularPrice}</label>
                                    </div>
                                    <div className="col-1 align-self-center">
                                        <label>{'₱' + p.LargePrice}</label>
                                    </div>
                                    <div className="col-1 align-self-center">
                                        <label>{(p.isAvailable === "1")? "YES" : "NO"}</label>
                                    </div>
                                    <div className="col-1 align-self-center" style={{textAlign:'center'}}>
                                        <ProductsTabModal content="EDIT" product={p} updateDisplay={this.updateDisplay}/>
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

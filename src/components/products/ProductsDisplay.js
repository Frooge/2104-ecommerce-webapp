import React, { Component } from 'react'
import ProductCard from './ProductCard';
import axios from 'axios';
import { Spinner } from 'react-bootstrap';
import './ProductsDisplay.css'

class ProductsDisplay extends Component {
    constructor(props){
        super(props);
        this.search = this.props.search;
        this.state = {
            isLoading: true,
            products: {}
        }
    }

    componentDidMount() {
        this.getProducts();
    }

    getProducts = () => {
        axios.get(`${require('../../config/api')}product.php?search=${this.search}`)
        .then((res) => {
            this.setState({
                isLoading: false,
                products: res.data
            })
        })
        .catch((err) => {
            console.log(err);
        })
    }

    render() {
        return (
            <div className="products-display bg-dark">
                <div className="container">
                    <p className="product-heading">Products</p>
                    {(this.state.isLoading) ? (
                        <div style={{textAlign:'center',color:'white'}}>
                            <Spinner animation="border" role="status"  >
                                <span className="visually-hidden">Loading...</span>
                            </Spinner>
                        </div>
                    ) : (this.state.products.length !== 0) ? (
                        <div className="row">
                            {this.state.products.map((p) => (
                                <ProductCard key={p.ProductID} product={p}/>
                            ))}
                        </div>
                    ) : (
                        <div className="row" style={{color:'white'}}>
                            <h2>No products available in stock</h2>
                        </div>
                    )
                    } 
                </div>
            </div>
        )
    }
}

export default ProductsDisplay;

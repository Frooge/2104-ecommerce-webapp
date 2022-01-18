import React, { Component } from 'react'
import ProductCard from '../products/ProductCard'
import { Spinner } from 'react-bootstrap';
import axios from 'axios';
import './ItemSuggest.css'

export default class ItemSuggest extends Component {
    constructor(props){
        super(props);
        this.state = {
            isLoading: true,
            suggestedProducts: {},
        }
    }

    componentDidMount() {
        if(this.props.productType !== ''){
            axios.get(`${require('../../config/api')}product.php?type=${this.props.productType}`)
            .then((res) => {
                this.setState({
                    isLoading: false,
                    suggestedProduct: res.data
                })
            })
            .catch((err) => {
                console.log(err);
            })
        }
    }

    render() {
        return (
            <div className="item-suggest container">
                <p>Products that are related to this item:</p>
                {(this.state.isLoading) ? (
                    <div style={{textAlign:'center',color:'white'}}>
                        <Spinner animation="border" role="status"  style={{textAlign:'center'}}>
                            <span className="visually-hidden">Loading...</span>
                        </Spinner> 
                    </div>
                    
                ) : (
                    <div className="row">
                        { this.state.suggestedProduct.map((p) => (
                            <ProductCard key={p.ProductID} product={p} />
                        ))}
                    </div>
                )}
                
            </div>
        )
    }
}

import React, { Component } from 'react'
import ProductsSearch from './ProductsSearch';
import './ProductsMain.css'
import ProductsFilter from './ProductsFilter';
import ProductsDisplay from './ProductsDisplay';

class ProductsMain extends Component {
    render() {
        return (
            <div className="products-main container">
                <ProductsSearch />
                <div className="row">
                    <div className="col-sm-2">
                        <ProductsFilter />
                    </div>
                    <div className="col-sm-10">
                        <ProductsDisplay />
                    </div>
                </div>
            </div>
        )
    }
}

export default ProductsMain;

import React, { Component } from 'react'
import Breadcrumbs from '../components/Breadcrumbs'
import Footer from '../components/Footer'
import NavbarMain from '../components/NavbarMain'
import ProductsMain from '../components/products/ProductsMain'
export default class Products extends Component {
    render() {
        return (
            <div>
                <NavbarMain navSelected='products'/>
                <Breadcrumbs/>
                <ProductsMain />
                <Footer />
            </div>
        )
    }
}

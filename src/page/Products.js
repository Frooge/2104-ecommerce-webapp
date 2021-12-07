import React, { Component } from 'react'
import Breadcrumbs from '../components/shared/Breadcrumbs'
import Footer from '../components/shared/Footer'
import NavbarMain from '../components/shared/NavbarMain'
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

import React from 'react'
import Breadcrumbs from '../components/Breadcrumbs';
import Footer from '../components/Footer';
import NavbarMain from '../components/NavbarMain'
import ProductsMain from '../components/ProductsMain';

function Products() {
    return (
        <div>
            <NavbarMain />
            <Breadcrumbs />
            <ProductsMain />
            <Footer />
        </div>
    )
}

export default Products;

import React from 'react'
import Breadcrumbs from '../components/shared/Breadcrumbs';
import Footer from '../components/shared/Footer';
import NavbarMain from '../components/shared/NavbarMain'
import ProductsMain from '../components/products/ProductsMain';

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

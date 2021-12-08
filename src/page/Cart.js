import React, { Component } from 'react'
import NavbarMain from '../components/NavbarMain'
import Footer from '../components/Footer'
import CartDisplay from '../components/cart/CartDisplay'

export default class Cart extends Component {
    render() {
        return (
            <div>
                <NavbarMain navSelected="cart"/>
                <CartDisplay />
                <Footer />
            </div>
        )
    }
}

import React, { Component } from 'react'
import NavbarMain from '../components/NavbarMain'
import Footer from '../components/Footer'
import CartDisplay from '../components/cart/CartDisplay'
import axios from 'axios'
import './Cart.css'

export default class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false,
            id: null,
        }
    }

    componentDidMount() {
        axios.get(`${require('../config/api')}session.php`, {credentials: "same-origin"})
        .then((res) => {
            if(res.data.session.length !== 0){
                this.setState({
                    isLoggedIn: true,
                    id: res.data.session.id
                })
            }
        })
        .catch((err) => {
            console.log(err);
        })
    }

    render() {
        return (
            <div>
                <NavbarMain navSelected="cart"/>
                {(this.state.isLoggedIn)? (
                    <CartDisplay id={this.state.id}/>
                ) : (
                    <div className="cart-center-div">
                        <h1>You need to be signed in to access your cart</h1>
                    </div>
                )}
                
                <Footer />
            </div>
        )
    }
}

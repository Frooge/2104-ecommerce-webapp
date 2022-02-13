import React, { Component } from 'react'
import './Footer.css'

class Footer extends Component {
    render() {
        return (
            <div className="footer bg-dark">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="container-info">
                                <h4>McFord PH</h4>
                                <a href="http://localhost:3000/products">Our Products</a>
                                <a href="http://localhost:3000/cart">Your Cart</a>
                            </div>
                        </div>
                        <div className="col">
                            <div className="container-info">
                                <h4>Visit Us</h4>
                                <a href="https://www.facebook.com/McfordMilkTea/">Facebook</a>
                                <a href="https://twitter.com/">Twitter</a>
                                <a href="https://www.instagram.com/">Instagram</a>
                            </div>
                        </div>
                        <div className="col">
                            <div className="container-info">
                                <h4>About us</h4>
                                <a href="http://localhost:3000/">About Us</a>
                                <a href="http://localhost:3000/">Contact Us</a>
                                <a href="http://www.google.com/">Privacy Policy</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        )
    }
}

export default Footer

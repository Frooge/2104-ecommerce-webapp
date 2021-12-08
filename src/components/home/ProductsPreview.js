import React, { Component } from 'react'
import {Row, Col, Button} from 'react-bootstrap'
import './ProductsPreview.css'

class ProductsPreview extends Component {
    render() {
        return (
            <div className="products-review container">
                <Row className="justify-content-around">
                    <Col sm={3}>
                        <a className="product-link" href="/#">
                            {/* first div is for images */}
                            <div className="image-container">
                                <div></div>
                            </div>
                            <div className="card-text">
                                <p>Milktea</p>
                                <p>blabla...</p>
                                <Button variant="warning">Get Milktea</Button>
                            </div>
                        </a>
                    </Col>
                    <Col sm={3}>
                        <a className="product-link" href="/#">
                            <div className="image-container">
                                <div></div>
                            </div>
                            <div className="card-text">
                                <p>Frappe</p>
                                <p>blabla...</p>
                                <Button variant="warning">Get Frappe</Button>
                            </div>
                        </a>
                    </Col>
                    <Col sm={3}>
                        <a className="product-link" href="/#">
                            <div className="image-container">
                                <div></div>
                            </div>
                            <div className="card-text">
                                <p>Snacks</p>
                                <p>blabla...</p>
                                <Button variant="warning" className="ml-2">Get Snacks</Button>
                            </div>
                        </a>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default  ProductsPreview

import React, { Component } from 'react'
import {Row, Col, Button} from 'react-bootstrap'
import mt from '../../img/mt.jpg'
import fp from '../../img/fp.jpg'
import sn from '../../img/sn.jpg'
import { Link } from 'react-router-dom'
import './ProductsPreview.css'

class ProductsPreview extends Component {
    render() {
        return (
            <div className="products-preview container">
                <Row className="justify-content-around">
                    <Col sm={3}>
                        <Link className="product-link" to="/products">
                            <div className="image-container">
                                <div>
                                    <img className="preview-image" src={mt} alt="milktea image"/>
                                </div>
                            </div>
                            <div className="card-text">
                                <h1>Milktea</h1>
                                <Button variant="warning" className="mt-5">Get Milktea</Button>
                            </div>
                        </Link>
                    </Col>
                    <Col sm={3}>
                        <Link className="product-link" to="/products">
                            <div className="image-container">
                                <div>
                                    <img className="preview-image" src={fp} alt="frappe image"/>
                                </div>
                            </div>
                            <div className="card-text">
                                <h1>Frappe</h1>
                                <Button variant="warning" className="mt-5">Get Frappe</Button>
                            </div>
                        </Link>
                    </Col>
                    <Col sm={3}>
                        <Link className="product-link" to="/products">
                            <div className="image-container">
                                <div>
                                    <img className="preview-image" src={sn} alt="snack image"/>
                                </div>
                            </div>
                            <div className="card-text">
                                <h1>Snacks</h1>
                                <Button variant="warning" className="mt-5">Get Snacks</Button>
                            </div>
                        </Link>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default  ProductsPreview

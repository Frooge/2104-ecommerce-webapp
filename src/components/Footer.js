import React, { Component } from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import './Footer.css'

class Footer extends Component {
    render() {
        return (
            <div className="Footer bg-dark">
                <Container>
                    <Row>
                        <Col>
                            <div className="container-info">
                                <h2>About us</h2>
                                <a href="#action1">Link</a>
                                <a href="#action2">Link</a>
                                <a href="#action1">Link</a>
                                <a href="#action2">Link</a>
                            </div>
                        </Col>
                        <Col>
                            <div className="container-info">
                                <h2>About us</h2>
                                <a href="#action1">Link</a>
                                <a href="#action2">Link</a>
                                <a href="#action1">Link</a>
                                <a href="#action2">Link</a>
                            </div>
                        </Col>
                        <Col>
                            <div className="container-info">
                                <h2>About us</h2>
                                <a href="#action1">Link</a>
                                <a href="#action2">Link</a>
                                <a href="#action1">Link</a>
                                <a href="#action2">Link</a>
                            </div>
                        </Col>
                        <Col>
                            <div className="container-info">
                                <h2>About us</h2>
                                <a href="#action1">Link</a>
                                <a href="#action2">Link</a>
                                <a href="#action1">Link</a>
                                <a href="#action2">Link</a>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Footer

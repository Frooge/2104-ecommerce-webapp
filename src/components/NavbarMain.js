import React, { Component } from 'react'
import { Navbar, Nav, Container, Form, FormControl, Button } from 'react-bootstrap'
import logo from '../img/mf_logo.png'
import './NavbarMain.css'

class NavbarMain extends Component {
    constructor(props){
        super(props);
        this.navSelected = props.navSelected;
    }

    render() {
        return (
            <div className="navbar-main">
                <Navbar variant="light" bg="dark" expand="lg" fixed="top">
                    <Container className="h-100">
                        <Navbar.Brand href="/">
                            <img className="navbar-brand" href="#" src={logo} alt="mcford logo"/>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Form className="d-flex navbar-content">
                                    <FormControl
                                        type="search"
                                        placeholder="Search"
                                        className="me-2"
                                        aria-label="Search"
                                    />
                                    <Button variant="outline-success">Search</Button>
                                </Form>
                                <Nav.Link href="/" className={[
                                    'navbar-content',
                                    'home' === this.navSelected ? ' active' : ''
                                    ].join('')}>
                                    Home
                                </Nav.Link>
                                <Nav.Link href="/products" className={[
                                    'navbar-content',
                                    'products' === this.navSelected ? ' active' : ''
                                    ].join('')}>
                                    Products
                                </Nav.Link>
                               <Nav.Link href="/cart" className={[
                                    'navbar-content',
                                    'cart' === this.navSelected ? ' active' : ''
                                    ].join('')}>
                                    Cart
                                </Nav.Link>
                            </Nav>
                            <Button variant="primary" href="/setup">Login</Button>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        )
    }
}

export default NavbarMain

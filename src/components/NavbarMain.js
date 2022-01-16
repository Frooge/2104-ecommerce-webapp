import React, { Component } from 'react'
import { Navbar, Nav, Container, Form, FormControl, Button, OverlayTrigger, Popover } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import axios from 'axios'
import NavbarAdmin from './NavbarAdmin'
import logo from '../img/mf_logo.png'
import './Navbar.css'

class NavbarMain extends Component {
    constructor(props){
        super(props);
        this.navSelected = props.navSelected;
        this.type = {
           1: 'customer',
           2: 'owner',
           3: 'admin' 
        }
        this.state = {
            id: null,
            name: null,
            userType: null
        }
    }

    componentDidMount() {
        this.getSession()
        .then(() => {
            this.getUser();
        })
    }

    getSession() {
        return axios.get(`${require('../config/api')}session.php`, {credentials: "same-origin"})
        .then((res) => {
            console.log(res);
            this.setState({
                id: res.data.session.id
            })
        })
    }

    getUser() {
        axios.get(`${require('../config/api')}account.php?userID=${this.state.id}`)
        .then((res) => {
            console.log(res);
            this.setState({
                name: res.data.Fullname,
                userType: this.type[res.data.UserTypeID]
            })
        })
        .catch((res) => {
            console.log(res);
        })
    }

    render() {
        return (
            <div className="navbar-main">
                <Navbar variant="light" bg="dark" expand="lg" fixed="top">
                    <Container className="h-100">
                        <Link to="/" className="navbar-brand">
                            <img className="navbar-brand" src={logo} alt="mcford logo"/>
                        </Link>
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
                                <Link to="/"
                                className={[
                                    'navbar-content nav-link',
                                    'home' === this.navSelected ? ' active' : ''
                                    ].join('')}>
                                    Home <i className="fas fa-home"></i>
                                </Link>
                                <Link to="/products"
                                className={[
                                    'navbar-content nav-link',
                                    'products' === this.navSelected ? ' active' : ''
                                    ].join('')}>
                                    Products <i className="fas fa-hamburger"></i>
                                </Link>
                                <Link to="/cart"
                                className={[
                                    'navbar-content nav-link',
                                    'cart' === this.navSelected ? ' active' : ''
                                    ].join('')}>
                                    Cart <i className="fas fa-shopping-cart"></i>
                                </Link>
                                <OverlayTrigger
                                trigger="click"
                                placement="bottom"
                                overlay={
                                    <Popover id={`popover-positioned-bottom`}>
                                    <Popover.Header as="h3">Store Location</Popover.Header>
                                    <Popover.Body>
                                        <strong>Holy guacamole! Holy guacamole! Holy guacamole!</strong> Check this info.
                                    </Popover.Body>
                                    </Popover>
                                }
                                >
                                    <Button variant="warning">Store Location <i className="fas fa-store"></i></Button>
                                </OverlayTrigger>
                            </Nav>
                            <NavbarAdmin key='admin' userType={this.state.userType} navSelected={this.navSelected} />
                            <Button variant="primary" href="/setup">Login</Button>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        )
    }
}

export default NavbarMain

import React, { Component } from 'react'
import { Navbar, Nav, Container, Form, FormControl, Button, OverlayTrigger, Popover } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router'
import axios from 'axios'
import $ from 'jquery'
import Swal from 'sweetalert2'
import NavbarAdmin from './NavbarAdmin'
import NavbarUser from './NavbarUser'
import logo from '../img/mf_logo.png'
import './Navbar.css'

class NavbarMain extends Component {
    constructor(props){
        super(props);
        this.navSelected = props.navSelected;
        this.navigate = props.navigate;
        this.type = {
           1: 'customer',
           2: 'owner',
           3: 'admin' 
        }
        this.state = {
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
            this.setState({
                id: res.data.session.id
            })
        })
    }

    getUser() {
        axios.get(`${require('../config/api')}account.php?userID=${this.state.id}`)
        .then((res) => {
            this.setState({
                name: res.data.Fullname,
                userType: this.type[res.data.UserTypeID]
            })
        })
        .catch((err) => {
            console.log(err);
        })
    }

    logoutAccount = (e) => {
        e.preventDefault();
        axios.get(`${require('../config/api')}logout.php`, {credentials: "same-origin"})
        .then(() => {
            return Swal.fire({
                icon: 'success',
                title: 'Logged Out Successfully',
            });
        })
        .then(() => {
            this.navigate('/setup');
        })
    }

    handleSearch = (e) => {
        e.preventDefault();

        let value = $('#nav-search-form').serializeArray(),
        obj = {};
        $(value).each(function(i , field){
            obj[field.name] = field.value;
        });

        window.location.replace(`/products?search=${obj["search"]}`)
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
                                <Form className="d-flex navbar-content" id="nav-search-form" onSubmit={this.handleSearch}>
                                    <FormControl
                                        type="search"
                                        name="search"
                                        className="me-2"
                                        placeholder="Search"
                                        aria-label="Search"
                                    />
                                    <Button type="submit" variant="outline-success">Search</Button>
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
                            <NavbarUser key='user' name={this.state.name} logout={this.logoutAccount}/>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        )
    }
}

export default function(props) {
    const navigate = useNavigate();

    return <NavbarMain navigate={navigate} navSelected={props.navSelected} />
}

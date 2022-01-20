import React from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css'

export default function NavbarAdmin(props) {

    if(props.userType === '3'){
        return (
            <Link to="/dashboard"
                className={[
                'navbar-dashboard nav-link',
                'dashboard' === props.navSelected ? ' active' : ''
                ].join('')}>
                Dashboard
            </Link>
        )
    } else {
        return null;
    }
}



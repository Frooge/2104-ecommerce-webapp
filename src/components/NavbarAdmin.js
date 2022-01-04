import React from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css'

export default function NavbarAdmin(props) {

    if(props.userType === 'admin'){
        return (
            <Link to="/dashboard"
                className={[
                'navbar-content nav-link',
                'dashboard' === props.navSelected ? ' active' : ''
                ].join('')}>
                Admin Dashboard
            </Link>
        )
    } else {
        return null;
    }
}



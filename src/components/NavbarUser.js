import React from 'react'
import { Button } from 'react-bootstrap'

export default function NavbarUser(props) {

    if(props.name !== null){
        return (
            <div className="row">
                <div className="col-8">
                    <a href="#" className="nav-link navbar-user"><i className="fas fa-user"></i> {props.name}</a>
                </div>
                <div className="col-4">
                    <Button variant="danger" href="/setup" onClick={props.logout}>Logout</Button>   
                </div>
            </div>
        )
    }
    else {
        return (
            <Button variant="primary" href="/setup">Login</Button>
        )
    }
    
}

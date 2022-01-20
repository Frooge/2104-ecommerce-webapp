import React from 'react'
import { Button, OverlayTrigger, Popover } from 'react-bootstrap'

export default function NavbarUser(props) {

    if(props.name !== null){
        return (
            <div className="row">
                <div className="col-8">
                <OverlayTrigger
                    trigger="click"
                    placement="bottom"
                    overlay={
                        <Popover id={`popover-positioned-bottom`}>
                        <Popover.Header as="h3">User Options</Popover.Header>
                            <Popover.Body className="navbar-user-popover-body">
                                <label className="btn">Account Settings</label>
                                <hr/>
                                <label className="btn">Show Transactions</label>
                                <hr/>
                            </Popover.Body>
                        </Popover>
                    }
                    >
                        <span className="nav-link navbar-user"><i className="fas fa-user"></i> {props.user.Fullname}</span>
                    </OverlayTrigger>
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

import React, { Component } from 'react'
import { Breadcrumb, BreadcrumbItem } from 'react-bootstrap'
import './Breadcrumbs.css'

class Breadcrumbs extends Component {
    render() {
        return (
            <div className="Breadcrumbs container">
                <Breadcrumb className="links">
                    <BreadcrumbItem href="/">Home</BreadcrumbItem>
                    <BreadcrumbItem href="#" active>Store</BreadcrumbItem>
                </Breadcrumb>
            </div>
        )
    }
}

export default Breadcrumbs 
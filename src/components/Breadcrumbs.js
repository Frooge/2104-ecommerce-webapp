import React, { Component } from 'react'
import { Breadcrumb, BreadcrumbItem } from 'react-bootstrap'
import './Breadcrumbs.css'

class Breadcrumbs extends Component {
    constructor(props){
        super(props);
        this.inItem = this.props.inItem;
        this.itemName = this.props.itemName;
    }

    render() {
        return (
            <div className="breadcrumbs container">
                <Breadcrumb className="links">
                    <BreadcrumbItem href="/">Home</BreadcrumbItem>
                    {this.inItem ? (<BreadcrumbItem href="/products">Products</BreadcrumbItem>):(<BreadcrumbItem active>Products</BreadcrumbItem>)}
                    {this.inItem ? (<BreadcrumbItem active>{this.itemName}</BreadcrumbItem>):null}
                </Breadcrumb>
            </div>
        )
    }
}

export default Breadcrumbs 
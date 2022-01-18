import React, { Component } from 'react'
import {Form, FormControl, Button, Dropdown, DropdownButton} from 'react-bootstrap'
import $ from 'jquery'
import './ProductsSearch.css'

class ProductsSearch extends Component {

    handleSearch = (e) => {
        e.preventDefault();

        let value = $('#products-search-form').serializeArray(),
        obj = {};
        $(value).each(function(i , field){
            obj[field.name] = field.value;
        });

        this.props.setSearch(obj['search']);
    }

    render() {
        return (
            <div className="products-search bg-dark">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-sm-5">
                            <Form id="products-search-form" onSubmit={this.handleSearch}>
                                <div className="row">
                                    <div className="col-sm-10 no-padding">
                                        <FormControl
                                            type="search"
                                            name="search"
                                            placeholder="Search by product name"
                                            size="md"
                                            className="me-2"
                                            aria-label="Search"
                                        />
                                    </div>
                                    <div className="col-sm-2 no-padding">
                                        <Button type="submit" variant="success">Search</Button>
                                    </div>
                                </div>
                            </Form>
                        </div>
                        <div className="col-sm-6">
                            <label>0 results</label>
                        </div>
                        <div className="col-sm-1">
                            <DropdownButton id="dropdown-basic-button" title="Sort By">
                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                            </DropdownButton>
                        </div>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default ProductsSearch;

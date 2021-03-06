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
                            <label>{this.props.results} results</label>
                        </div>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default ProductsSearch;

import React, { Component } from 'react'
import {Form, FormControl, FormLabel, Button} from 'react-bootstrap'
import $ from 'jquery'
import './HomeSearch.css';

class HomeSearch extends Component {
    handleSearch = (e) => {
        e.preventDefault();

        let value = $('#home-search-form').serializeArray(),
        obj = {};
        $(value).each(function(i , field){
            obj[field.name] = field.value;
        });

        window.location.replace(`/products?search=${obj["search"]}`)
    }

    render() {
        return (
            <div className="home-search">
                <div className="container search-container bg-dark">
                    <Form className="container" id="home-search-form" onSubmit={this.handleSearch}>
                        <div className="row">
                            <div className="col-sm-4 offset-2">
                                <FormLabel className="form-label">What Are You Looking For?</FormLabel>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-7 offset-2">
                                <FormControl
                                    type="search"
                                    name="search"
                                    className="me-2"
                                    placeholder="Search"
                                    aria-label="Search"
                                />
                            </div>
                            <div className="col-sm-2">
                                <Button variant="success" type="submit">Search</Button>
                            </div>
                        </div>
                    </Form>
                </div>
            </div>
        )
    }
}

export default HomeSearch
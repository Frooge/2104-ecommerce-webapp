import React, { Component } from 'react'
import {Form, FormControl, FormLabel, Button} from 'react-bootstrap'
import './HomeSearch.css';

class HomeSearch extends Component {
    render() {
        return (
            <div className="home-search">
                <div className="container search-container bg-dark">
                    <Form className="container">
                        <div className="row">
                            <div className="col-sm-4 offset-2">
                                <FormLabel className="form-label">What Are You Looking For?</FormLabel>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-7 offset-2">
                                <FormControl
                                    type="search"
                                    placeholder="Search..."
                                    size="md"
                                    className="me-2"
                                    aria-label="Search"
                                />
                            </div>
                            <div className="col-sm-2">
                                <Button variant="success">Search</Button>
                            </div>
                        </div>
                    </Form>
                </div>
            </div>
        )
    }
}

export default HomeSearch
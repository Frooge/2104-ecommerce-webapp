import React, { Component } from 'react'
import axios from 'axios'
import $ from 'jquery'
import { Spinner, Form, Button, FormControl } from 'react-bootstrap'
import TransactionModal from './TransactionModal'
import './Transaction.css'

export default class Transaction extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            orders: [],
            search: ''
        };
    }

    componentDidMount() {
        this.getTransactions();
    }

    getTransactions = () => {
        axios.get(`${require('../../config/api')}order.php?search=${this.state.search}`)
        .then((res) => {
            this.setState({
                isLoading: false,
                orders: res.data
            })
        })
        .catch((err) => {
            console.log(err);
        })
    }

    handleSearch = (e) => {
        e.preventDefault();

        let value = $('#transaction-search-form').serializeArray(),
        obj = {};
        $(value).each(function(i , field){
            obj[field.name] = field.value;
        });

        this.setState({
            isLoading: true,
            search: obj["search"]
        }, this.getTransactions);
    }

    render() {
        return (
            <div className="transaction" id="transaction">
                <div className="row">
                    <span className="col-8">
                        <h3>Transactions</h3>
                    </span>
                    <Form className="d-flex col-4" id="transaction-search-form" onSubmit={this.handleSearch}>
                        <FormControl
                            type="search"
                            name="search"
                            placeholder="Search by user"
                            className="me-2"
                            aria-label="Search by user"
                        />
                        <Button type="submit" variant="success">Search</Button>
                    </Form>
                </div>
                <hr />
                <div className="row">
                    <div className="col-1">
                        <label><strong>ID</strong></label>
                    </div>
                    <div className="col-4">
                        <label><strong>User</strong></label>
                    </div>
                    <div className="col-3">
                        <label><strong>Date</strong></label>
                    </div>
                    <div className="col-2">
                        <label><strong>Method</strong></label>
                    </div>
                    <div className="col-1">
                        <label><strong>Total</strong></label>
                    </div>
                    <div className="col">
                    </div>
                </div>
                {(this.state.isLoading) ? (
                    <div style={{textAlign:'center'}}>
                        <Spinner animation="border" role="status"  style={{textAlign:'center'}}>
                            <span className="visually-hidden">Loading...</span>
                        </Spinner>
                    </div>
                ) : (this.state.orders.length > 0) ? this.state.orders.map((o, index) => (
                    <div className="row transaction-display-row" key={o.OrderID} style={{backgroundColor:(index%2)?'#324052':'#4e5e73'}}>
                        <div className="col-1 align-self-center">
                            <label>{o.OrderID}</label>
                        </div>
                        <div className="col-4 align-self-center">
                            <label>#{o.UserID} - {o.FullName}</label>
                        </div>
                        <div className="col-3 align-self-center">
                            <label>{o.OrderDate}</label>
                        </div>
                        <div className="col-2 align-self-center">
                            <label>{o.PaymentMethod}</label>
                        </div>
                        <div className="col-1 align-self-center">
                            <label>{'₱' + o.TotalPrice}</label>
                        </div>
                        <div className="col align-self-center" style={{textAlign:'center'}}>
                            <TransactionModal order={o}/>
                        </div>
                    </div>
                )) : (
                    <div>
                        <h3>No transactions</h3>
                    </div>
                )}
                
                
            </div>
        )
    }
}

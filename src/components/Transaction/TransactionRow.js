import React, { Component } from 'react'
import axios from 'axios'
import TransactionRowModal from './TransactionRowModal'
import './TransactionRow.css'

export default class TransactionRow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            delivery: {
                'ShippingAddress' : 'None',
                'Message' : 'Come pick up the products at our store'
            }
        }
    }

    componentDidMount() {
        if(this.props.order.PaymentMethod === 'Delivery') {
            axios.get(`${require('../../config/api')}delivery.php?order=${this.props.order.OrderID}`)
            .then((res) => {
                this.setState({
                    delivery: res.data[0]
                })
            })
            .catch((err) => {
                console.log(err);
            })
        }
    }

  render() {
    return (
        <div className="row">
            <div className="col-8 transaction-details transaction-col">
                <div className="row">
                    <div className="col-4">
                        <label><strong>Order No.:</strong></label>
                    </div>
                    <div className="col">
                        <label>{this.props.order.OrderID}</label>
                    </div>
                </div>
                <div className="row">
                    <div className="col-4">
                        <label><strong>When:</strong></label>
                    </div>
                    <div className="col">
                        <label>{this.props.order.OrderDate}</label>
                    </div>
                </div>
                <div className="row">
                    <div className="col-4">
                        <label><strong>Method:</strong></label>
                    </div>
                    <div className="col">
                        <label>{this.props.order.PaymentMethod}</label>
                    </div>
                </div>
                <div className="row">
                    <div className="col-4">
                        <label><strong>To:</strong></label>
                    </div>
                    <div className="col">
                        <label>{this.state.delivery.ShippingAddress}</label>
                    </div>
                </div>
                <TransactionRowModal order={this.props.order} delivery={this.state.delivery}/>
            </div>
            <div className="col form-group transaction-message">
                <p>Admin Message:</p>
                <textarea key={this.state.delivery.Message} className="form-control" rows="4" readOnly defaultValue={this.state.delivery.Message}/>
            </div>
            <hr />
        </div>
    );
  }
}

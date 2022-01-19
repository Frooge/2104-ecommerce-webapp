import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import $ from 'jquery'
import Swal from 'sweetalert2'
import './ItemOrder.css'

export default class ItemOrder extends Component {
    constructor(props){
        super(props);
        this.state = {
            extras: [{
                'ExtrasID': 0,
                'AddOns': 'none',
                'AddFee': 0
            }]
        }
    }

    componentDidMount() {
        axios.get(`${require('../../config/api')}extras.php?type=${this.props.product.ProductTypeID}`)
        .then((res) => {
            this.setState({
                extras: res.data
            })
        })
        .catch((err) => {
            console.log(err);
        })
    }

    handleFormSubmit = (e) => {
        e.preventDefault();

        let value = $('#add-to-cart-form').serializeArray(),
        obj = {};
        $(value).each(function(i , field){
            obj[field.name] = field.value;
        });


        let extrasSelected;
        this.state.extras.map((e) => {
            if(obj['extras'] == e.ExtrasID) {
                extrasSelected = e;
            } 
        });
        let sizePrice = (obj['size'] === 'Regular')?this.props.product.RegularPrice:this.props.product.LargePrice;
        let partialPrice = (parseInt(sizePrice) + parseInt(extrasSelected.AddFee)) * (obj['quantity']);

        let data = new FormData(document.getElementById("add-to-cart-form"));
        data.append('product', this.props.product.ProductID)
        data.append('price', partialPrice)

        axios.get(`${require('../../config/api')}session.php`, {credentials: "same-origin"})
        .then((res) => {
            if(res.data.session.length !== 0){
                data.append('user', res.data.session.id);
                data.append('mode', 'CREATE');
                return axios.post(`${require('../../config/api')}cart.php`, data);
            } else {
                return {'data': false};
            }
        })
        .then((res) => {
            if(res.data){
                Swal.fire({
                    icon: 'success',
                    title: 'Successfully added item to cart'
                })
                .then(() => {
                    window.location.reload();
                })
            } else {
                Swal.fire({
                    icon: 'warning',
                    title: 'You need to be logged in to purchase items',
                    footer: '<a href="/setup">Sign in here</a>'
                })
            }
        })
        .catch((err) => {
            console.log(err);
        })

    }

    render() {
        return (
            <div className="item-order">
                <form onSubmit={this.handleFormSubmit} id="add-to-cart-form">
                    <div className="form-group select-item">
                        <label><strong>Size</strong></label>
                        <div className="row item-row">
                            <div className="col form-check">
                                <input className="form-check-input" type="radio" id="regular-option" name="size" value="Regular" defaultChecked/>
                                <label className="form-check-label" htmlFor="regular-option">
                                    Regular
                                </label>
                            </div>
                            <div className="col form-check">
                                <input className="form-check-input" type="radio" id="large-option" name="size" value="Large" disabled={this.props.product.TypeName === 'Snack'}/>
                                <label className="form-check-label" htmlFor="large-option">
                                    Large
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="form-group select-item">
                        <label><strong>Extras</strong></label>
                        <select className="form-control" name="extras">
                            {this.state.extras.map((e) => (
                                <option key={e.ExtrasID} value={e.ExtrasID}>{e.AddOns} - ₱{e.AddFee}</option>
                            ))}
                        </select>
                    </div>
                    <div className="form-group select-item">
                        <label><strong>Quantity</strong></label>
                        <select className="form-control" name="quantity">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                        </select>
                    </div>
                    <button type="submit" className="btn btn-warning btn-lg w-100 mt-3">Add to cart</button>
                    <Link to='/products'><button type="button" className="btn btn-secondary w-100 mt-3">Continue Shopping</button></Link>
                </form>
            </div>
        )
    }
}

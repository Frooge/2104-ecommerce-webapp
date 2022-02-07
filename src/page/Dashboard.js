import React, { Component } from 'react'
import NavbarMain from '../components/NavbarMain'
import InfoCard from '../components/dashboard/InfoCard'
import Transaction from '../components/dashboard/Transaction'
import Delivery from '../components/dashboard/Delivery'
import ProductsGraph from '../components/dashboard/ProductsGraph'
import ProductsTab from '../components/dashboard/ProductsTab'
import Sidenav from '../components/dashboard/Sidenav'
import axios from 'axios'
import './Dashboard.css'

export default class Dashboard extends Component {
    constructor() {
        super();
        this.state = {
            isLoading: true
        }
    }

    componentDidMount() {
        axios.get(`${require('../config/api')}session.php`)
        .then((res) => {
            if(res.data.session.length !== 0) {
                return axios.get(`${require('../config/api')}account.php?userID=${res.data.session.id}`);
            } else {
                window.location.replace('/');
            }
        })
        .then((res) => {
            if(res.data.UserTypeID !== '3') {
                window.location.replace('/');
            } else {
                this.setState({
                    isLoading: false
                })
            }
        })
        .catch((err) => {
            console.log(err);
        })
    }

    render() {
        return (this.state.isLoading) ? null : (
            <div>
               <NavbarMain 
                navSelected='dashboard'
                />
                <div className="dashboard row">
                    <div className="col-3">
                        <Sidenav />
                    </div>
                    <div className="col-9">
                        {/* <InfoCard /> */}
                        <Transaction />
                        <Delivery />
                        <ProductsTab />
                        {/* <ProductsGraph /> */}
                    </div>
                </div>
            </div>
        )
    }
}

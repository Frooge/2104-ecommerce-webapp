import React, { Component } from 'react'
import NavbarMain from '../components/NavbarMain'
import InfoCard from '../components/dashboard/InfoCard'
import Transaction from '../components/dashboard/Transaction'
import Delivery from '../components/dashboard/Delivery'
import ProductsGraph from '../components/dashboard/ProductsGraph'
import ProductsTab from '../components/dashboard/ProductsTab'
import Sidenav from '../components/dashboard/Sidenav'
import './Dashboard.css'

export default class Dashboard extends Component {
    render() {
        return (
            <div>
               <NavbarMain 
                navSelected='dashboard'
                />
                <div className="dashboard row">
                    <div className="col-3">
                        <Sidenav />
                    </div>
                    <div className="col-9">
                        <InfoCard />
                        <Transaction />
                        <Delivery />
                        <ProductsTab />
                        <ProductsGraph />
                    </div>
                </div>
            </div>
        )
    }
}

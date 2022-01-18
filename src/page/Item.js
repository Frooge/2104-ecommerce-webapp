import React, { Component } from 'react'
import NavbarMain from '../components/NavbarMain';
import Footer from '../components/Footer';
import Breadcrumbs from '../components/Breadcrumbs';
import ItemDisplay from '../components/item/ItemDisplay';
import ItemSuggest from '../components/item/ItemSuggest';
import axios from 'axios';

class Item extends Component {
    constructor(props){
        super(props);
        this.state = {
            productName: '',
        }
    }

    setProductName = (name) => {
        this.setState({
            productName: name
        })
    }

    render() {
        return (
            <div>
                <NavbarMain />
                <Breadcrumbs key={this.state.productName} inItem={true} itemName={this.state.productName}/>
                <ItemDisplay setName={this.setProductName}/>
                {/* <ItemSuggest /> */}
                <Footer />
            </div>
        )
    }
}

export default Item;

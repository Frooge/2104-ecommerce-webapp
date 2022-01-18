import React, { Component } from 'react'
import NavbarMain from '../components/NavbarMain';
import Footer from '../components/Footer';
import Breadcrumbs from '../components/Breadcrumbs';
import ItemDisplay from '../components/item/ItemDisplay';
import ItemSuggest from '../components/item/ItemSuggest';
import axios from 'axios';
import { Spinner } from 'react-bootstrap';

class Item extends Component {
    constructor(props){
        super(props);
        this.state = {
            isLoading: true,
            product: {},
        }
    }

    componentDidMount() {
        let id = this.getQueryVariable('p_id')
        if(id){
            axios.get(`${require('../config/api')}product.php?id=${id}`)
            .then((res) => {
                this.setState({
                    isLoading: false,
                    product: res.data[0]
                })
            })
            .then(() => {
                this.props.setProduct(this.state.product.ProductName, this.state.product.ProductTypeID);
            })
            .catch((err) => {
                console.log(err);
            })
        }
        else {
            window.location.replace('/');
        }
    }

    getQueryVariable = (variable) => { // by MING WU
        var query = window.location.search.substring(1);
        var vars = query.split("&");
        for (var i=0;i<vars.length;i++) {
                    var pair = vars[i].split("=");
        if(pair[0] === variable){return pair[1];}
         }
        return(false);
    }

    render() {
        return (this.state.isLoading) ? (
            <div style={{textAlign:'center',color:'white'}}>
                <Spinner animation="border" role="status"  style={{textAlign:'center'}}>
                    <span className="visually-hidden">Loading...</span>
                </Spinner> 
            </div>
        ) : (
            <div>
                <NavbarMain />
                <Breadcrumbs inItem={true} itemName={this.state.product.ProductName}/>
                <ItemDisplay product={this.state.product}/>
                <ItemSuggest productType={this.state.product.ProductTypeID}/>
                <Footer />
            </div>
        )
    }
}

export default Item;

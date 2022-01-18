import React, { Component } from 'react'
import ProductsSearch from './ProductsSearch'
import ProductsFilter from './ProductsFilter'
import ProductsDisplay from './ProductsDisplay'
import './ProductsMain.css'

export default class ProductsMain extends Component {
    constructor(props){
        super(props);
        this.state = {
            search: '',
        }
    }

    componentDidMount() {
        if(this.getQueryVariable('search') !== false){
            this.setState({
                search: this.getQueryVariable('search')
            })
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

    setFilterSearch = (setSearch = this.state.search) => {
        this.setState({
            search: setSearch
        })
    } 

    render() {
        return (
            <div className="products-main container">
            <ProductsSearch setSearch={this.setFilterSearch}/>
            <div className="row">
                <div className="col-sm-2">
                    <ProductsFilter />
                </div>
                <div className="col-sm-10">
                    <ProductsDisplay key={this.state.search} search={this.state.search} />
                </div>
            </div>
        </div>
        )
    }
}

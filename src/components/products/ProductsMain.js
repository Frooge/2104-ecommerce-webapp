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
        console.log(query) //"app=article&act=news_content&aid=160990"
        var vars = query.split("&");
        console.log(vars) //[ 'app=article', 'act=news_content', 'aid=160990' ]
        for (var i=0;i<vars.length;i++) {
                    var pair = vars[i].split("=");
                    console.log(pair)//[ 'app', 'article' ][ 'act', 'news_content' ][ 'aid', '160990' ] 
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

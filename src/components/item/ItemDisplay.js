import React, { Component } from 'react'
import ItemImage from './ItemImage'
import ItemDetails from './ItemDetails'
import ItemOrder from './ItemOrder'
import axios from 'axios'
import { Spinner } from 'react-bootstrap'
import './ItemDisplay.css'

export default class ItemDisplay extends Component {
    constructor(props){
        super(props);
        this.state = ({
            isLoading: true,
            product: {},
        });
    }

    componentDidMount() {
        let id = this.getQueryVariable('p_id')
        if(id){
            axios.get(`${require('../../config/api')}product.php?id=${id}`)
            .then((res) => {
                console.log(res, "product result");
                this.setState({
                    isLoading: false,
                    product: res.data[0]
                })
            })
            .then(() => {
                this.props.setName(this.state.product.ProductName);
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

    render() {
        return (
            <div className="item-display container">
                {(this.state.isLoading) ? (
                    <Spinner animation="border" role="status"  style={{textAlign:'center'}}>
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                ) : (
                    <div className="row">
                        <div className="col">
                            <ItemImage image={this.state.product.ProductImage}/>
                        </div>
                        <div className="col-5">
                            <ItemDetails
                            productName={this.state.product.ProductName}
                            storeName={this.state.product.StoreName}
                            price={this.state.product.Price}
                            description={this.state.product.Description}
                            />
                        </div>
                        <div className="col-3">
                            <ItemOrder />
                        </div>
                    </div>
                )}
                
            </div>
        )
    }
}

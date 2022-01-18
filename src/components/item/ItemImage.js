import React, { Component } from 'react'

import './ItemImage.css'

export default class ItemImage extends Component {
    constructor(props){
        super(props);
        this.image = (typeof this.props.image !== 'undefined') ? require(`../../img/${this.props.image}`).default : require('../../img/placeholder.png').default;
    }
    
    render() {
        return (
            <div>
                <img className="item-image" src={this.image} alt="item"/>
            </div>
        )
    }
}

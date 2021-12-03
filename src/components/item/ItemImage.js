import React, { Component } from 'react'

import './ItemImage.css'

export default class ItemImage extends Component {
    constructor(){
        super();
        this.image = require('../../img/placeholder.png').default;
    }
    render() {
        
        return (
            <div>
                <img className="item-image" src={this.image} alt="item"/>
            </div>
        )
    }
}

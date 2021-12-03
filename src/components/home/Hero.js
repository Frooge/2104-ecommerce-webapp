import React, { Component } from 'react'
import milktea from '../../img/milktea.png'
import {Image} from 'react-bootstrap'
import './Hero.css'

class Hero extends Component {
    render() {
        return (
            <div className="Hero container">
                <Image
                src={milktea}
                alt="milktea"
                rounded
                fluid
                />
                    
            </div>
        )
    }
}

export default Hero

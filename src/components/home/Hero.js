import React, { Component } from 'react'
import milktea from '../../img/milktea.png'
import {Image} from 'react-bootstrap'
import './Hero.css'

class Hero extends Component {
    render() {
        return (
            <div className="hero container">
                <Image
                src={milktea}
                alt="milktea"
                className="hero-image"
                rounded
                fluid
                />
                    
            </div>
        )
    }
}

export default Hero

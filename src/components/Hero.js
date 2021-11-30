import React, { Component } from 'react'
import milktea from '../img/milktea.png'
import {Container, Image} from 'react-bootstrap'
import './Hero.css'

class Hero extends Component {
    render() {
        return (
            <div className="Hero">
                <Container>
                    <Image
                    src={milktea}
                    alt="milktea"
                    rounded
                    fluid
                    />
                    
                </Container>
            </div>
        )
    }
}

export default Hero

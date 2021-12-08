import React, { Component } from 'react'
import NavbarMain from '../components/NavbarMain';
import Footer from '../components/Footer';
import Breadcrumbs from '../components/Breadcrumbs';
import ItemDisplay from '../components/item/ItemDisplay';
import ItemSuggest from '../components/item/ItemSuggest';

class Item extends Component {
    render() {
        return (
            <div>
                <NavbarMain />
                <Breadcrumbs inItem={true}/>
                <ItemDisplay />
                <ItemSuggest />
                <Footer />
            </div>
        )
    }
}

export default Item;

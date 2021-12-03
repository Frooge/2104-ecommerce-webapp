import React, { Component } from 'react'
import NavbarMain from '../components/shared/NavbarMain';
import Footer from '../components/shared/Footer';
import Breadcrumbs from '../components/shared/Breadcrumbs';
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

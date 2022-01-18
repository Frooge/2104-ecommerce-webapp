import React, { Component } from 'react'
import $ from 'jquery'
import './ProductsFilter.css'

class ProductsFilter extends Component {

    handleFormChange = (e) => {
        e.preventDefault();

        let value = $('#filter-form').serializeArray(),
        obj = {};
        $(value).each(function(i , field){
            obj[field.name] = field.value;
        });

        let milktea = false, frappe = false, snack = false;
        if("milktea" in obj){
            milktea = true;
        }
        if("frappe" in obj){
            frappe = true;
        }
        if("snack" in obj){
            snack = true;
        }

        this.props.setFilter(milktea, frappe, snack);
    }

    render() {
        return (
            <div className="products-filter bg-dark">
                <div className="container filter-list">
                    <p className="filter-heading">Filters</p>
                    <form onSubmit={this.handleFormChange} id="filter-form">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="foo" id="mt-filter" name="milktea" defaultChecked="true"/>
                            <label className="form-check-label check-color" htmlFor="mt-filter">
                                Milktea
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="foo" id="fr-filter" name="frappe" defaultChecked="true"/>
                            <label className="form-check-label check-color" htmlFor="fr-filter">
                                Frappe
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="foo" id="sn-filter" name="snack" defaultChecked="true"/>
                            <label className="form-check-label check-color" htmlFor="sn-filter">
                                Snacks
                            </label>
                        </div>
                        <button className="btn btn-primary btn-sm w-100 mt-4" type="submit">Apply Filters</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default ProductsFilter;

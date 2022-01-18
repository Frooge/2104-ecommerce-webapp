import React, { Component } from 'react'
import './ProductsFilter.css'

class ProductsFilter extends Component {
    render() {
        return (
            <div className="products-filter bg-dark">
                <div className="container filter-list">
                    <p className="filter-heading">Filters</p>
                    <form>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="1" name="milktea" defaultChecked="true"/>
                            <label className="form-check-label check-color">
                                Milktea
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="2" name="frappe" defaultChecked="true"/>
                            <label className="form-check-label check-color">
                                Frappe
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="3" name="snack" defaultChecked="true"/>
                            <label className="form-check-label check-color">
                                Snacks
                            </label>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default ProductsFilter;

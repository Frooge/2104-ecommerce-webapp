import React, { Component } from 'react'
import './ProductsFilter.css'

class ProductsFilter extends Component {
    render() {
        return (
            <div className="products-filter bg-dark">
                <div className="container filter-list">
                    <p className="filter-heading">Filters</p>
                    <form>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" defaultChecked="true"/>
                            <label class="form-check-label">
                                Milktea
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" defaultChecked="true"/>
                            <label class="form-check-label">
                                Frappe
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" defaultChecked="true"/>
                            <label class="form-check-label">
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

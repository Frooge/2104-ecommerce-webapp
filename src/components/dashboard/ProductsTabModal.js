import React, { useState } from 'react'
import { Modal } from 'react-bootstrap'
import axios from 'axios'

export default function ProductsTabModal({content, product}) {
    const [show, setShow] = useState(false);
    const isProduct = typeof product !== 'undefined';
    const image = (isProduct)?
    require(`../../img/${product.ProductImage}`).default : require(`../../img/placeholder.png`).default;
    const type = (isProduct)? product.TypeName : 'Milktea';
    const size = (isProduct)? product.Size : 'Regular';
    const availableSelect = (isProduct)?
    (
        <div className="form-group">
            <label><strong>Is Available?</strong></label>
            <select className="form-control" name="available" defaultValue={(product.isAvailable === "0")?"0":"1"}>
                <option value="1">YES</option>
                <option value="0">NO</option>
            </select>
        </div>
    ) : null;
    const submitBtn = (isProduct)?
    (
        <button type="submit" className="btn btn-success w-25" >Edit Product</button>
    ):
    (
        <button type="submit" className="btn btn-danger w-25" >Add Product</button>
    );

    const handleFormSubmit = (e) => {
        e.preventDefault();

        if(content === 'ADD'){
            axios.post(`${require('../../config/api')}product.php`, new FormData(document.getElementById(`${content}-form`)))
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            })
        }
        else if(content === 'EDIT' && isProduct){
            let data = new FormData(document.getElementById(`${content}-form`));
            data.append('id', product.ProductID);

            for (var pair of data.entries()) {
                console.log(pair[0]+ ', ' + pair[1]); 
            }

            axios.post(`${require('../../config/api')}product_update.php`, data)
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            })
        }
        else {
            console.log("Error ✔✔✔")
        }

    }


    return (
        <div>
            <button className="btn btn-primary w-100" onClick={() => setShow(true)}>{content}</button>

            <Modal
                show={show}
                onHide={() => setShow(false)}
                dialogClassName="modal-view-w"
            >
                <Modal.Header closeButton>
                    <Modal.Title>{content} Product</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form id={content + '-form'}  onSubmit={handleFormSubmit} encType="multipart/form-data" method="post">
                        <div className="row mb-4">
                            <div className="col-4 form-group">
                                <label><strong>Insert Image</strong></label>
                                <input type="file" className="form-control mb-3" accept="image/jpeg,image/png" name="image" id="image-file"/>
                                <img className="products-image" src={image} alt="product"/>
                            </div>
                            <div className="col-5">
                                <div className="form-group">
                                    <label><strong>Product Name</strong></label>
                                    <input type="text" className="form-control form-control-lg" name="name" defaultValue={(isProduct)?product.ProductName:''} required/>
                                </div>
                                <div className="form-group">
                                    <label><strong>Description</strong></label>
                                    <textarea className="form-control" name="description" rows="8" defaultValue={(isProduct)?product.Description:''} />
                                </div>
                            </div>
                            <div className="col-3">
                                <label><strong>Product Type</strong></label>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" id="milktea-option" name="typeID" value="1" defaultChecked={type==='Milktea'}/>
                                    <label className="form-check-label" htmlFor="milktea-option">
                                        Milktea
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" id="frappe-option" name="typeID" value="2"  defaultChecked={type==='Frappe'}/>
                                    <label className="form-check-label" htmlFor="frappe-option">
                                        Frappe
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" id="snack-option" name="typeID" value="3"  defaultChecked={type==='Snack'}/>
                                    <label className="form-check-label" htmlFor="snack-option">
                                        Snack
                                    </label>
                                </div>
                                <div className="form-group">
                                    <label><strong>Store</strong></label>
                                    <select className="form-control" name="storeID">
                                        <option>1</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label><strong>Price (in php)</strong></label>
                                    <input type="text" className="form-control" name="price" defaultValue={(isProduct)?product.Price:''} required/>
                                </div>
                                <label><strong>Size</strong></label>
                                <div className="form-check col">
                                    <input className="form-check-input" type="radio" id="regular-option" name="size" value="Regular"  defaultChecked={size==='Regular'}/>
                                    <label className="form-check-label" htmlFor="regular-option">
                                        Regular
                                    </label>
                                </div>
                                <div className="form-check col">
                                    <input className="form-check-input" type="radio" id="large-option" name="size" value="Large"  defaultChecked={size==='Large'}/>
                                    <label className="form-check-label" htmlFor="large-option">
                                        Large
                                    </label>
                                </div>
                                {availableSelect}
                            </div>
                        </div>
                        <div className="w-100 dash-btn">
                            {submitBtn}
                        </div>
                    </form>
                </Modal.Body>
            </Modal>
        </div>
    )
}

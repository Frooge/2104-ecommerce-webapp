import React, { useState } from 'react'
import { Modal } from 'react-bootstrap'
import axios from 'axios'

export default function ProductsTabModal({content, prodType = 'milktea', prodImage = 'placeholder.png'}) {
    const [show, setShow] = useState(false);
    const image = require(`../../img/${prodImage}`).default;

    const handleFormSubmit = (e) => {
        e.preventDefault();
        
        // let value = $(`#${content}-form`).serializeArray(),
        // obj = {};
        // $(value).each(function(i , field){
        //     obj[field.name] = field.value;
        // });

        // let data = new FormData();
        // data.append('typeID', product.type);
        // data.append('storeID', obj["storeID"]);
        // data.append('name', obj["name"]);
        // data.append('price-regular', obj["price-regular"]);
        // data.append('price-large', obj["price-large"]);
        // data.append('description', obj["description"]);
        // data.append('image', $("#image-file"));

        axios.post(`${require('../../config/api')}product.php`, new FormData(document.getElementById(`${content}-form`)))
        .then((res) => {
            console.log(res);
        })
        .catch((err) => {
            console.log(err);
        })
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
                                    <input type="text" className="form-control form-control-lg" name="name" required/>
                                </div>
                                <div className="form-group">
                                    <label><strong>Description</strong></label>
                                    <textarea className="form-control" name="description" rows="8" />
                                </div>
                            </div>
                            <div className="col-3">
                                <label><strong>Product Type</strong></label>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" id="milktea-option" name="typeID" value="1"  defaultChecked/>
                                    <label className="form-check-label" htmlFor="milktea-option">
                                        Milktea
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" id="frappe-option" name="typeID" value="2"  />
                                    <label className="form-check-label" htmlFor="frappe-option">
                                        Frappe
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" id="snack-option" name="typeID" value="3"  />
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
                                    <div className="row">
                                        <div className="col">
                                            <label>Regular</label>
                                            <input type="text" className="form-control" name="price-regular" required/>
                                        </div>
                                        <div className="col">
                                            <label>Large</label>
                                            <input type="text" className="form-control" name="price-large" required/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-100 dash-btn">
                            <button type="submit" className="btn btn-success w-25" >{content}</button>
                        </div>
                    </form>
                </Modal.Body>
            </Modal>
        </div>
    )
}

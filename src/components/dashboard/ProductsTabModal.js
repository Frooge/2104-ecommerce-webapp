import React, { useState } from 'react'
import { Modal } from 'react-bootstrap'
import Swal from 'sweetalert2';
import axios from 'axios'

export default function ProductsTabModal({content, product, updateDisplay}) {
    const isProduct = typeof product !== 'undefined';

    const [show, setShow] = useState(false);
    const [type, setType] = useState((isProduct)? product.TypeName : 'Milktea');

    const image = (isProduct)?
    require(`../../img/${product.ProductImage}`).default : require(`../../img/placeholder.png`).default;
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
    const modalBtn = (isProduct)?
    (
        <span onClick={() => setShow(true)}><i className="fas fa-edit" /></span>
    ):
    (
        <button className="btn btn-primary w-100" onClick={() => setShow(true)}>{content}</button>
    );

    const handleFormSubmit = (e) => {
        e.preventDefault();

        if(content === 'ADD'){
            axios.post(`${require('../../config/api')}product.php`, new FormData(document.getElementById(`${content}-form`)))
            .then((res) => {
                return Swal.fire({
                    icon: 'success',
                    title: 'Successfully Added Product',
                });
            })
            .then(() => {
                setShow(false);
                updateDisplay();
            })
            .catch((err) => {
                console.log(err);
                Swal.fire({
                    icon: 'error',
                    title: 'An Error Occurred',
                });
            })
        }
        else if(content === 'EDIT' && isProduct){
            let data = new FormData(document.getElementById(`${content}-form`));
            data.append('id', product.ProductID);

            axios.post(`${require('../../config/api')}product.php`, data)
            .then((res) => {
                console.log(res);
                return Swal.fire({
                    icon: 'success',
                    title: 'Successfully Updated Product',
                });
            })
            .then(() => {
                setShow(false);
                updateDisplay();
            })
            .catch((err) => {
                console.log(err);
                Swal.fire({
                    icon: 'error',
                    title: 'An Error Occurred',
                });
            })
        }
        else {
            console.log("Error ✔✔✔")
        }
    }

    return (
        <div>
            {modalBtn}

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
                                    <input className="form-check-input" type="radio" id="milktea-option" name="typeID" value="1" onClick={() => setType('Milktea')} defaultChecked={type==='Milktea'}/>
                                    <label className="form-check-label" htmlFor="milktea-option">
                                        Milktea
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" id="frappe-option" name="typeID" value="2" onClick={() => setType('Frappe')} defaultChecked={type==='Frappe'}/>
                                    <label className="form-check-label" htmlFor="frappe-option">
                                        Frappe
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" id="snack-option" name="typeID" value="3" onClick={() => setType('Snack')} defaultChecked={type==='Snack'}/>
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
                                <label><strong>Price (in php)</strong></label>
                                <div className="row">
                                    <div className="form-group col">
                                        <label style={{display:(type!=='Snack')?'block':'none'}}><strong>Regular</strong></label>
                                        <input type="text" className="form-control" name="regular" defaultValue={(isProduct)?product.RegularPrice:'0'} required/>
                                    </div>
                                    <div className="form-group col" style={{display:(type!=='Snack')?'block':'none'}}>
                                        <label><strong>Large</strong></label>
                                        <input type="text" className="form-control" name="large" defaultValue={(isProduct && type!== 'Snack')?product.LargePrice:'0'} required/>
                                    </div>
                                </div>
                                {availableSelect}
                            </div>
                        </div>
                        <div className="w-100 mb-5" style={{textAlign:'center'}}>
                            {submitBtn}
                        </div>
                    </form>
                </Modal.Body>
            </Modal>
        </div>
    )
}

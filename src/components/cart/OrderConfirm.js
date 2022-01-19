import React, { useState } from 'react'
import { Modal } from 'react-bootstrap'
import './OrderConfirm.css'

export default function OrderConfirm({items, total, handleForm, setParentShow}) {
    const [show, setShow] = useState(false);
    const image = require(`../../img/${items[0].Image}`).default;
    const thisDate = new Date();
    const date = `${thisDate.getMonth() + 1}/${thisDate.getDate()}/${thisDate.getFullYear()}`

    const closeAllModal = (e) => {
        e.preventDefault();

        setShow(false);
        setParentShow(false);
    }

  return (
      <div>
        <button type="button" className="btn btn-primary btn-order w-100" onClick={() => setShow(true)}>Order</button>

        <Modal
            show={show}
            onHide={() => setShow(false)}
            dialogClassName=""
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title>Confirm Order</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="order-confirm-title">
                    <img className="logo-image" src={image} alt="store-logo"/>
                    <h3>{items[0].StoreName}</h3>
                    <p>{items[0].Address}</p>
                </div>
                <div className="order-body">
                    <hr/>
                    <div className="row order-label">
                        <div className="col">
                            <label>Ordered on:</label>
                        </div>
                        <div className="col">
                            <p>{date}</p>
                        </div>
                    </div>
                    <div className="row order-label">
                        <div className="col">
                            <label>Deliver to:</label>
                        </div>
                        <div className="col">
                            <p>pick up</p>
                        </div>
                    </div>
                    <label>Purchased Items:</label>
                    <div className="row">
                        <div className="col-6">
                            <p>Name</p>
                        </div>
                        <div className="col">
                            <p>Extras</p>
                        </div>
                        <div className="col">
                            <p>Qty</p>
                        </div>
                        <div className="col">
                            <p>Price</p>
                        </div>
                    </div>
                    {items.map((i) => (
                        <div key={i.ItemID} className="row">
                            <div className="col-6">
                                <p>{i.ProductName}</p>
                            </div>
                            <div className="col">
                                <p>{i.AddOns}</p>
                            </div>
                            <div className="col">
                                <p>{i.Quantity}</p>
                            </div>
                            <div className="col">
                                <p>{'₱' + i.PartialPrice}</p>
                            </div>
                        </div>
                    ))}
                    <hr/>
                    <div className="row">
                        <div className="offset-8 col-2">
                            <p>Total:</p>
                        </div>
                        <div className="col-2">
                            <p><strong>{'₱' + total}</strong></p>
                        </div>
                    </div>
                    <div className="row mb-3 mt-3">
                        <div className="col">
                            <button type="submit" className="btn btn-success w-100" onClick={(e) => {handleForm(e); closeAllModal(e)}}>Confirm Order</button>
                        </div>
                        <div className="col">
                            <button type="button" className="btn btn-danger w-100" onClick={closeAllModal}>Cancel</button>
                        </div>
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    </div>
  );
}


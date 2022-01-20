import React, { useState, useEffect } from 'react'
import { Modal, Spinner } from 'react-bootstrap'
import axios from 'axios'

export default function TransactionRowModal({order, delivery}) {
    const [show, setShow] = useState(false);
    const [items, setItems] = useState({
        isLoading: true,
        data: []
    });

    useEffect(() => {
        axios.get(`${require('../../config/api')}cart.php?cart=${order.CartID}`)
        .then((res) => {
           setItems({
                isLoading: false,
                data: res.data
            })
        })
        .catch((err) => {
            console.log(err);
        })
    }, []);

    return (
        <div>
            <button className="btn btn-success mt-3" onClick={() => setShow(true)}>View</button>

            <Modal
                show={show}
                onHide={() => setShow(false)}
                dialogClassName=""
            >
                <Modal.Header closeButton>
                    <Modal.Title>Transaction</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                {(items.isLoading) ? (
                        <div style={{textAlign:'center'}}>
                            <Spinner animation="border" role="status"  style={{textAlign:'center'}}>
                                <span className="visually-hidden">Loading...</span>
                            </Spinner>
                        </div>
                    ) : (
                        <div>
                            <div className="order-confirm-title">
                                <img className="logo-image" src={require(`../../img/${items.data[0].Image}`).default} alt="store-logo"/>
                                <h3>{items.data[0].StoreName}</h3>
                                <p>{items.data[0].Address}</p>
                            </div>
                            <div className="order-body">
                                <hr/>
                                <div className="row order-label">
                                    <div className="col">
                                        <label>Ordered on:</label>
                                    </div>
                                    <div className="col">
                                        <p>{order.OrderDate}</p>
                                    </div>
                                </div>
                                <div className="row order-label">
                                    <div className="col">
                                        <label>Method:</label>
                                    </div>
                                    <div className="col">
                                        <p>{order.PaymentMethod}</p>
                                    </div>
                                </div>
                                <div className="row order-label">
                                    <div className="col">
                                        <label>To:</label>
                                    </div>
                                    <div className="col">
                                        <p>{delivery.ShippingAddress}</p>
                                    </div>
                                </div>
                                <div className="row order-label">
                                    <div className="col">
                                        <label>Receipient:</label>
                                    </div>
                                    <div className="col">
                                        <p>{order.Fullname}</p>
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
                                {items.data.map((i) => (
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
                                        <p><strong>{'₱' + order.TotalPrice}</strong></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </Modal.Body>
            </Modal>
        </div>
    )
}

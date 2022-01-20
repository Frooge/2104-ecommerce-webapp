import React, { useState, useEffect } from 'react'
import { Modal, Spinner } from 'react-bootstrap'
import axios from 'axios'
import TransactionRow from './TransactionRow'
import './UserTransactionModal.css'

export default function UserTransactionModal({id}) {
    const [show, setShow] = useState(false);
    const [orders, setOrders] = useState({
        isLoading: true,
        data: [],
    });

    useEffect(() => {
        axios.get(`${require('../../config/api')}order.php?user=${id}`)
        .then((res) => {
            setOrders({
                isLoading: false,
                data: res.data
            })
        })
        .catch((err) => {
            console.log(err);
        })
    }, [])

    return (
        <div>
            <label className="btn" onClick={() => setShow(true)}>Show Transactions</label>

            <Modal
                show={show}
                onHide={() => setShow(false)}
                dialogClassName=""
            >
                <Modal.Header closeButton>
                    <Modal.Title>Delivery Message</Modal.Title>
                </Modal.Header>
                <Modal.Body className="transaction-modal-body">
                    {(orders.isLoading) ? (
                        <div style={{textAlign:'center'}}>
                            <Spinner animation="border" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </Spinner>
                        </div>
                    ) : orders.data.map((o) => (
                        <TransactionRow key={o.OrderID} order={o}/>
                    ))}
                </Modal.Body>
            </Modal>
        </div>
    )
}

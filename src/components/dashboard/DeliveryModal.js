import React, { useState, useEffect } from 'react'
import { Modal } from 'react-bootstrap'
import Swal from 'sweetalert2'
import axios from 'axios'

export default function DeliveryModal({message = '', id, update}) {
    const [show, setShow] = useState(false);

    const handleFormSubmit = (e) => {
        e.preventDefault();
        
        let data = new FormData(document.getElementById('message-form'));
        data.append('delivery', id)
        data.append('mode', 'MESSAGE');

        for (var pair of data.entries()) {
            console.log(pair[0]+ ', ' + pair[1]); 
        }

        axios.post(`${require('../../config/api')}delivery.php`, data)
        .then(() => {
            return Swal.fire({
                icon: 'success',
                title: 'Successfully Submitted'
            })
        })
        .then(() => {
            setShow(false);
            update();
        })
        .catch((err) => {
            console.log(err);
        })
    }

    return (
        <div>
            <span onClick={() => setShow(true)}><i className="fas fa-edit" /></span>

            <Modal
                show={show}
                onHide={() => setShow(false)}
                dialogClassName=""
            >
                <Modal.Header closeButton>
                    <Modal.Title>Delivery Message</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={handleFormSubmit} id="message-form">
                        <div className="form-group">
                            <h3>Enter a message:</h3>
                            <textarea className="form-control" name="message" rows="8" defaultValue={message} maxLength="255" />
                        </div>
                        <label>255 max characters</label>
                        <div style={{textAlign:'right'}}>
                            <button type="submit" className="btn btn-success">Submit</button>
                        </div>
                    </form>
                </Modal.Body>
            </Modal>
        </div>
    )
}

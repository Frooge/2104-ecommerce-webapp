import React, { useState, useEffect } from 'react'
import { Modal } from 'react-bootstrap'
import axios from 'axios'
import Swal from 'sweetalert2'
import OrderConfirm from './OrderConfirm'
import './CartDelivery.css'

export default function CartDelivery({items, id, total}) {
    const [show, setShow] = useState(false);
    const [active, setActive] = useState(1);
    const [address, setAddress] = useState(true);
    const [userAddress, setUserAdress] = useState('');
    


    useEffect(() => {
        axios.get(`${require('../../config/api')}account.php?userID=${id}`)
        .then((res) => {
            setUserAdress(res.data.Address);
        })
        .catch((err) => {
            console.log(err);
        })
    }, [])

    const handleSubmitForm = (e) => {
        e.preventDefault();


        let data = new FormData(document.getElementById("order-form"));
        data.append('user', id);
        data.append('cart', items[0].CartID);
        data.append('price', total);

        for (var pair of data.entries()) {
            console.log(pair[0]+ ', ' + pair[1]); 
        }

        axios.post(`${require('../../config/api')}order.php`, data)
        .then((res) => {
            console.log(res);
            if(res.data){
                return Swal.fire({
                    icon: 'success',
                    title: 'Successfully Requested Order',
                    text: 'Check your profile to view transactions/delivery'
                });
            }
        })
        .then(() => {
            window.location.reload();
        })
        .catch((err) => {
            console.log(err);
        })
    }

  return (
      <div>
        <button className="btn btn-warning w-100 mb-3" onClick={() => setShow(true)} disabled={(!items.length)}>Checkout</button>

        <Modal
            show={show}
            onHide={() => setShow(false)}
            dialogClassName="modal-w"
        >
            <Modal.Header closeButton>
                <Modal.Title>Delivery info</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <form id="order-form" onSubmit={handleSubmitForm}>
                <div className="row justify-content-evenly">
                    <label
                        className={[
                            "col-sm-5 delivery-check",
                            active === 1 ? ' active-check' : ''
                        ].join('')}
                        onClick={() => setActive(1)}
                    >
                        <input type="radio" name="payment" className="form-check-input" checked={active === 1} value="Delivery" onChange={() => {}}/>
                        <h6 className="title">Delivery</h6>
                        <p className="text-muted">We will deliver to your address</p>
                    </label>
                    <label 
                        className={[
                            "col-sm-5 delivery-check",
                            active === 2 ? ' active-check' : ''
                        ].join('')}
                        onClick={() => setActive(2)}
                    >
                        <input type="radio" name="payment" className="form-check-input" checked={active === 2} value="WalkIn" onChange={() => {}}/>
                        <h6 className="title">Pick-up</h6>
                        <p className="text-muted">Come to our store</p>
                    </label>
                </div>
                <div className="delivery-body mt-3" style={{display: active === 1 ? 'block': 'none'}}>
                    <div className="row">
                        <div className="col-4 form-check">
                            <input type="radio" id="inline-radio-1" className="delivery-radio form-check-input" checked={address} onChange={() => {}} onClick={() => setAddress(true)}/>
                            <label htmlFor="inline-radio-1">Use current address</label>
                        </div>
                        <div className="col form-check">
                            <input type="radio" id="inline-radio-2" className="form-check-input" checked={!address} onChange={() => {}} onClick={() => setAddress(false)}/>
                            <label htmlFor="inline-radio-2">Set address</label>
                        </div>
                    </div>
                    <div className="form-group mt-3">
                        <label>Set Address</label>
                        <div className="col">
                            <input name="address" type="text" className="form-control w-50" placeholder="City/Municipality Address" defaultValue={userAddress} readOnly={address ? true : false}/>
                        </div>
                    </div>
                </div>
                <div className="delivery-body mt-4 mb-4">
                    <OrderConfirm items={items} total={total} handleForm={handleSubmitForm} setParentShow={setShow}/>
                </div>
            </form>     
            </Modal.Body>
        </Modal>
    </div>
  );
}

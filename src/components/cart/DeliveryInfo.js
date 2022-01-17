import React, { Component } from 'react'
import { Modal, Form } from 'react-bootstrap'
import './DeliveryInfo.css'

export default class DeliveryInfo extends Component {
    constructor(props){
        super(props);
        this.show = props.show;
        this.state = {
            boxActive: 1,
            currAddress: true,
        };
    }

    hideModal = () => {
        this.props.setShowModal(false);
    }

    setBoxActive = (active) => {
        this.setState({
            boxActive: active
        });
    }

    setCurrAddress = (isCurr) => {
        this.setState({
            currAddress: isCurr
        });
    }

    render() {
        return (
            <Modal
                show={this.show}
                onHide={this.hideModal}
                dialogClassName="modal-w"
            >
                <Modal.Header closeButton>
                    <Modal.Title>Delivery Info</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <div className="row justify-content-evenly">
                            <label
                                className={[
                                    "col-sm-5 delivery-check",
                                    this.state.boxActive === 1 ? ' active-check' : ''
                                ].join('')}
                                onClick={() => this.setBoxActive(1)}
                            >
                                <input type="radio" name="delivery" checked={this.state.boxActive === 1 ? true : false}/>
                                <h6 className="title">Delivery</h6>
                                <p className="text-muted">We will deliver to your</p>
                            </label>
                            <label 
                                className={[
                                    "col-sm-5 delivery-check",
                                    this.state.boxActive === 2 ? ' active-check' : ''
                                ].join('')}
                                onClick={() => this.setBoxActive(2)}
                            >
                                <input type="radio" name="pick-up" checked={this.state.boxActive === 2 ? true : false}/>
                                <h6 className="title">Pick-up</h6>
                                <p className="text-muted">Come to our store</p>
                            </label>
                        </div>
                        <div className="delivery-body mt-3" style={{display: this.state.boxActive === 1 ? 'block': 'none'}}>
                            <Form.Check
                                inline
                                label="Use current address"
                                type="radio"
                                id="inline-radio-1"
                                className="delivery-radio"
                                onClick={() => this.setCurrAddress(true)}
                                checked={this.state.currAddress ? true : false}
                            />
                            <Form.Check
                                inline
                                label="Set address"
                                type="radio"
                                id="inline-radio-2"
                                onClick={() => this.setCurrAddress(false)}
                                checked={!this.state.currAddress ? true : false}
                            />
                            <div className="form-group mt-3">
                                <label>Set Address</label>
                                <div className="row">
                                    <div className="col">
                                        <input name="city" type="text" className="form-control" placeholder="City/Municipality"
                                        readOnly={this.state.currAddress ? true : false}
                                        />
                                    </div>
                                    <div className="col">
                                        <input name="province" type="text" className="form-control" placeholder="Province"
                                        readOnly={this.state.currAddress ? true : false}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="delivery-body mt-4 mb-4">
                            <button className="btn btn-primary btn-order w-100">Order</button>
                        </div>
                    </Form>
                </Modal.Body>
            </Modal>
        )
    }
}

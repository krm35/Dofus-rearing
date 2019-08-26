'use strict';

import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faUser, faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { Modal } from 'react-bootstrap'

import './modalComponent.css';

export default class ModalComponent extends React.Component {

  constructor() {
    super()
    this.state = {
      modalShow: false,
      handleClose: false
    }
  }

  render() {
    return (
      <Modal
        onHide={this.props.handleClose}
        show={this.props.modalShow}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Modal heading
        </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Centered Modal</h4>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
            consectetur ac, vestibulum at eros.
        </p>
        </Modal.Body>
        <Modal.Footer>
          <button onClick={this.props.handleClose}>Close</button>
        </Modal.Footer>
      </Modal >
    )
  }
}
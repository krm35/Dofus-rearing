'use strict';

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { Modal } from 'react-bootstrap'

import './navComponent.css';
import ModalComponent from '../ModalComponent/ModalComponent';

export default class NavComponent extends React.Component {
  constructor() {
    super()
    this.state = {
      modalShow: false
    }
    this.handleClose = this.handleClose.bind(this)
  }

  setModal(arg) {
    this.setState({
      modalShow: arg
    })
  }

  handleClose() {
    this.setModal(false)
  }

  render() {
    return (
      <React.Fragment>
        <ModalComponent modalShow={this.state.modalShow} handleClose={this.handleClose} />
        <nav className="navbar navbar-expand navbar-light bg-light">
          <a className="navbar-brand" href="#">Elevage</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#">Accueil <span className="sr-only">(current)</span></a>
              </li>
            </ul>
            <ul className="nav navbar-nav navbar-right sign-up-login">
              <li className="sign-up" onClick={() => this.setModal(true)}>
                <FontAwesomeIcon icon={faUser} />
                Inscription
              </li>
              <li className="sign-in" onClick={() => this.setModal(true)}>
                <FontAwesomeIcon icon={faSignInAlt} />
                Connexion
              </li>
            </ul>
          </div>

        </nav>
      </React.Fragment>
    )
  }
}
'use strict';

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { Modal } from 'react-bootstrap';
import PropTypes from 'prop-types';
import axios from 'axios';

import './modalComponent.css';

export default class ModalComponent extends React.Component {

  constructor() {
    super()
    this.state = {
      pseudo: '',
      password: '',
      confirmPassword: '',
      error: false
    }
    this.handleChangeInput = this.handleChangeInput.bind(this)
    this.handleClose = this.handleClose.bind(this)
  }

  handleChangeInput(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  verification(choice) {
    let pseudo = this.state.pseudo
    let password = this.state.password
    let confPassword = this.state.confirmPassword
    if (choice === "sign-in") {
      if (pseudo && pseudo.length >= 2 && password && password.length) {
        this.sign('in')
      }
    }
    else {
      if (pseudo.length >= 2 && password.length && confPassword.length
        && password === confPassword) {
        this.sign('up')
      }
    }
  }

  handleClose() {
    this.setState({
      error: false
    })
    this.props.handleClose()
  }

  sign(upOrIn) {
    let url = upOrIn === 'up' ? '/users/subscribe' : '/users/connexion'
    axios.post('https://localhost:3001' + url, {
      pseudo: this.state.pseudo,
      password: this.state.password,
    })
      .then(respond => {
        console.log('res : ', respond)
        if (respond.data) {
          if (respond.data === "already use") {
            this.setState({
              error: upOrIn === 'up' ? 'Pseudo déjà utilisé !' : 'Identifiant ou mot de passe incorrect'
            })
          }
          else {
            this.props.cookies('create', respond.data)
            this.handleClose()
          }
        }
      })
      .catch((e) => {
        console.log('Erreur : ', e)
      })
  }

  render() {
    return (
      <Modal
        onHide={this.handleClose}
        show={this.props.show}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {this.props.choice === "sign-in" ? "Connexion" : "Inscription"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {this.state.error ?
            <div className="alert alert-danger" role="alert">
              <FontAwesomeIcon icon={faTimesCircle} />
              {this.state.error}
            </div> : null}
          <h6>Pseudo <span className="pseudo-min-caract">(Min 2 caractères)</span></h6>
          <input
            className="pseudo"
            type="text"
            name="pseudo"
            onChange={this.handleChangeInput}></input>
          <h6>Mot de passe</h6>
          <input
            className="password"
            type="password"
            name="password"
            onChange={this.handleChangeInput}
          ></input>
          {this.props.choice === "sign-up" ?
            <span>
              <h6>Confirmer le mot de passe</h6>
              <input
                className="confirm-password"
                type="password"
                name="confirmPassword"
                onChange={this.handleChangeInput}
              ></input>
            </span> :
            null}
        </Modal.Body>
        <Modal.Footer>
          {this.props.choice === "sign-in" ?
            <button onClick={() => this.verification("sign-in")}>Me connecter</button> :
            <button onClick={() => this.verification("sign-up")}>M'inscrire</button>
          }
        </Modal.Footer>
      </Modal >
    )
  }
}

ModalComponent.propTypes = {
  choice: PropTypes.string,
  cookies: PropTypes.func,
  show: PropTypes.bool,
  handleClose: PropTypes.func
};
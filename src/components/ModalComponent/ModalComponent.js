'use strict';

import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faUser, faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { Modal } from 'react-bootstrap';
import axios from 'axios';

import './modalComponent.css';

export default class ModalComponent extends React.Component {

  constructor() {
    super()
    this.state = {
      pseudo: '',
      password: '',
      confirmPassword: ''
    }
    this.handleChangeInput = this.handleChangeInput.bind(this)
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
        this.signIn()
      }
    }
    else {
      if (pseudo.length >= 2 && password.length && confPassword.length && (password === confPassword)) {
        this.signUp()
      }
    }
  }

  signIn() {
    axios.post('/api/users/connexion', {
      pseudo: this.state.pseudo,
      password: this.state.password
    })
      .then(respond => {
        if (respond.data) {
          console.log('Connecte ! ', respond)
          this.props.cookies('create', respond.data)
        }
        console.log('respond : ', respond)
      })
      .catch((e) => {
        console.log('Erreur : ', e)
      })
  }

  signUp() {
    axios.post('/api/users/subscribe', {
      pseudo: this.state.pseudo,
      password: this.state.password
    })
      .then(respond => {
        if (respond.data) {
          console.log('Inscrit ! ', respond)
          this.props.cookies('create', respond.data)
        }
      })
      .catch((e) => {
        console.log('Erreur : ', e)
      })
  }

  render() {
    return (
      <Modal
        onHide={this.props.handleClose}
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
            <button onClick={() => this.verification('sign-in')}>Me connecter</button> :
            <button onClick={() => this.verification('sign-up')}>M'inscrire</button>
          }
        </Modal.Footer>
      </Modal >
    )
  }
}
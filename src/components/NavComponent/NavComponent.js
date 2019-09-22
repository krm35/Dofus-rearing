'use strict';

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faSignInAlt, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import './navComponent.css';
import ModalComponent from '../ModalComponent/ModalComponent';

export default class NavComponent extends React.Component {
  constructor() {
    super()
    this.state = {
      show: false
    }
    this.handleClose = this.handleClose.bind(this)
  }

  setModal(arg, choice = '') {
    this.setState({
      show: arg,
      choice
    })
  }

  handleClose() {
    this.setModal(false)
  }

  render() {
    console.log(this.props.url)
    return (
      <React.Fragment>
        <ModalComponent
          show={this.state.show}
          handleClose={this.handleClose}
          choice={this.state.choice}
          cookies={this.props.cookies}
        />
        <nav className="navbar navbar-expand navbar-light">
          <a className="navbar-brand" href="#">dofus élevage</a>
          <span className="diagonal-divider"></span>
          <button className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <ul className="navbar-nav mr-auto">
            <li className={this.props.url === "//" || this.props.url === "#/" ? "nav-item nav-active" : "nav-item"}>
              <a className="nav-link" href="#">
                Accueil<span className="sr-only">(current)</span>
              </a>
            </li>
          </ul>
          {this.props.userCookie.id ?
            < React.Fragment >
              <ul className="navbar-nav mr-auto mt-2 mt-lg-0"></ul>
              <div>
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="/"
                      id="navbarDropdownMenuLink"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false">
                      <FontAwesomeIcon icon={faUserCircle} />
                    </a>
                    <div
                      className="dropdown-menu dropdown-profile"
                      aria-labelledby="navbarDropdownMenuLink">
                      <h5 className="dropdown-pseudo">{this.props.userCookie.pseudo}</h5>
                      <a
                        className="dropdown-item profile"
                        href={`/users/${this.props.userCookie.id}`}>
                        Profile
                      </a>
                      <div className="dropdown-divider"></div>
                      <a
                        className="dropdown-item nav-disconnect"
                        onClick={() => { this.props.cookies('remove') }}>
                        Se déconnecter
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </React.Fragment>
            :
            <ul className="nav navbar-nav navbar-right sign-up-login">
              <li className="sign-up" onClick={() => this.setModal(true, 'sign-up')}>
                <FontAwesomeIcon icon={faUser} />
                Inscription
              </li>
              <li className="sign-in" onClick={() => this.setModal(true, 'sign-in')}>
                <FontAwesomeIcon icon={faSignInAlt} />
                Connexion
              </li>
            </ul>
          }

        </nav>
      </React.Fragment >
    )
  }
}

NavComponent.propTypes = {
  cookies: PropTypes.func,
  userCookie: PropTypes.object,
  url: PropTypes.string
};
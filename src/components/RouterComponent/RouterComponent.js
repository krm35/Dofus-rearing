'use strict';

import React from 'react';
// import RearingChoice from '../RearingChoice/RearingChoice';
import NavComponent from '../NavComponent/NavComponent';
import Cookies from 'universal-cookie';
import Home from './../Home/Home';

import './style.css';

const cookies = new Cookies()

export default class RouterComponent extends React.Component {

  constructor() {
    super()
    this.state = {
      content: '',
      userCookie: {},
      url: ''
    }
    this.cookies = this.cookies.bind(this)
  }

  componentDidMount() {
    let url = window.location.href.split('/');
    let page = url[3] === "" ? "/" : url[3];
    let page_arg = url[4] ? url[4] : '';
    page = page + '/' + page_arg;
    this.getComponentByUrl(page)
    if (window.location.href.split('/')[2].indexOf(':') != -1) {
      global.api = "https://" + window.location.href.split('/')[2].split(':')[0] + ':3001'
    }
    else {
      global.api = "https://" + window.location.href.split('/')[2] + ':3001'
    }

  }

  checkIfConnected() {
    let userC = cookies.get("dofus-rearing-user")
    if (userC) {
      return userC
    }
    return {}
  }

  getComponentByUrl(page) {
    let userC = this.checkIfConnected()
    let content = ''
    if (page === "rearing/") {
      console.log('rearing')
      // this.state = {
      //   content: <RearingChoice />
      // }
      content = 'REARING'
    }
    else {
      content = <Home />
    }
    //console.log('user cookie : ', userC)
    this.setState({
      content,
      userCookie: userC,
      url: page
    })
  }

  cookies(choice, values = {}) {
    if (choice === "create") {
      cookies.set('dofus-rearing-user', {
        id: values.id,
        pseudo: values.pseudo
      })
      this.setState({
        userCookie: cookies.get('dofus-rearing-user')
      })
    }
    else {
      cookies.remove('dofus-rearing-user')
      this.setState({
        userCookie: {}
      })
    }
  }

  render() {
    return (
      <React.Fragment>
        <NavComponent
          cookies={this.cookies}
          userCookie={this.state.userCookie}
          url={this.state.url} />
        {this.state.content}
      </React.Fragment>
    )
  }
}
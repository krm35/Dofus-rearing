'use strict';

import React from 'react';
import RearingChoice from '../RearingChoice/RearingChoice';
import NavComponent from '../NavComponent/NavComponent';
import Cookies from 'universal-cookie';
import Home from './../Home/Home';

const cookies = new Cookies()

export default class RouterComponent extends React.Component {

  constructor() {
    super()
    let url = window.location.href.split('/');
    let content = '';
    let page = url[3] === "" ? "/" : url[3];
    let origine_page = page
    let page_arg = url[4] ? url[4] : '';
    page = page + '/' + page_arg;
    if (page === "rearing/") {
      console.log('rearing')
      // this.state = {
      //   content: <RearingChoice />
      // }
      this.state = {
        content: 'REARING'
      }
    }
    else {
      this.state = {
        content: <Home />
      }
    }
  }

  cookies(choice, values = {}) {
    if (choice === "create") {
      cookies.set(values.name, {
        id: values.id,
        pseudo: values.pseudo
      })
    }
    else {
      cookies.remove(values.name)
    }
  }

  render() {
    return (
      <React.Fragment>
        <NavComponent cookies={this.cookies} />
        {this.state.content}

      </React.Fragment>
    )
  }
}
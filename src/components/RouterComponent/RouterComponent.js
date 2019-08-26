'use strict';

import React from 'react';
import RearingChoice from '../RearingChoice/RearingChoice';
import NavComponent from '../NavComponent/NavComponent';
import Home from './../Home/Home';

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
    }
    else {
      this.state = {
        content: <Home />
      }
    }
  }

  setContent(component) {
    this.setState({
      content: component
    })
  }

  render() {
    return (
      <React.Fragment>
        <NavComponent />
        {this.state.content}

      </React.Fragment>
    )
  }
}
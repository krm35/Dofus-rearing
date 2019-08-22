'use strict';

import React from 'react';
import RearingChoice from '../RearingChoice/RearingChoice';
import Home from './../Home/Home';

export default class RouterComponent extends React.Component {

  constructor() {
    super()
    this.state = {
      content: false
    }
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
      console.log('AUTRE')
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
        {this.state.content}

      </React.Fragment>
    )
  }
}
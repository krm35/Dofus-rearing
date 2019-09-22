'use strict';

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faCalendarCheck, faScroll, faClipboard } from '@fortawesome/free-solid-svg-icons';

import './home.css';

export default class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="home-infos">
          <div className="col-8 offset-2 row one">
            <div className="col-2"><FontAwesomeIcon icon={faClock} /></div>
            <div className="col-10 home-text"> text </div>
          </div>
          <div className="col-8 offset-2 row one">
            <div className="col-10 home-text"> text </div>
            <div className="col-2"><FontAwesomeIcon icon={faCalendarCheck} /></div>
          </div>
          <div className="col-8 offset-2 row one">
            <div className="col-2"><FontAwesomeIcon icon={faScroll} /></div>
            <div className="col-10 home-text"> text </div>
          </div>
          <div className="col-8 offset-2 row one">
            <div className="col-10 home-text"> text </div>
            <div className="col-2"><FontAwesomeIcon icon={faClipboard} /></div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}
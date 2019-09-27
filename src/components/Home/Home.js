'use strict';

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faCalendarCheck, faScroll } from '@fortawesome/free-solid-svg-icons';
import { faClipboard, faHammer } from '@fortawesome/free-solid-svg-icons';
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons';

import './home.css';

export default class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h5 className="build-infos col-10 offset-1 text-center">
          <div>Le site est actuellement en développement</div>
          <FontAwesomeIcon icon={faHammer} />
        </h5>
        <p className="build-msg">Etant donné que personne n'attend la sortie de ce site, le développement est ralentit.</p>
        <p className="build-msg">
          Vous pouvez me contacter grâce à cette page Facebook
          <a target="_blank" href="https://www.facebook.com/Dofus-%C3%A9levage-Site-web-101074527964002/">
            <FontAwesomeIcon icon={faFacebookSquare} />
          </a>
        </p>
        {/* <div className="home-infos">
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
        </div> */}
      </React.Fragment>
    )
  }
}
"use strict";

import React from 'react';
import Informations from './../Informations/informations';
// import dofusInfos from "./../dofus-infos";

import './RearingChoice.css';

export default class RearingChoice extends React.Component {

  constructor() {
    super()
    this.state = {
      rendering: false
    }
    this.handleSetRendering = this.handleSetRendering.bind(this)
    //console.log(dofusInfos['dragodindes'])
  }

  handleSetRendering(component) {
    this.setState({
      rendering: component
    })
  }

  render() {
    return (
      this.state.rendering ||
      <React.Fragment>
        <div className="top-infos"></div>
        <div className="principal-container home-menu">
          <button className="btn btn-infos"
            onClick={() => this.handleSetRendering(
              <Informations showOrRemove="show" hstr={this.handleSetRendering} />
            )}>
            Informations
          </button>
          <button className="btn btn-craft">Crafts</button>
          <button className="btn btn-parchemin">Parchemins</button>
          <button className="btn btn-gestation">Gestation des dragodindes</button>
          <button className="btn btn-mydd">Mes dragodindes</button>
          <button className="btn btn-lastdd">Modifier la dernière dragodinde fécondée</button>
          <button className="btn btn-fecondation-calculator">Calculer les fécondations</button>
        </div>
      </React.Fragment>
    )
  }

}
"use strict";

import React from 'react';
import Informations from './../Informations/informations';

import './RearingChoice.css';

export default class RearingChoice extends React.Component {

  componentDidMount() {
  }

  render() {
    return (
      <div className="top-infos"></div>
      <div className="principal-container home-menu">
        <button className="btn btn-infos" onClick={<Informations showOrRemove="show" />}>Informations</button>
        <button className="btn btn-craft">Crafts</button>
        <button className="btn btn-parchemin">Parchemins</button>
        <button className="btn btn-gestation">Gestation des dragodindes</button>
        <button className="btn btn-mydd">Mes dragodindes</button>
        <button className="btn btn-lastdd">Modifier la dernière dragodinde fécondée</button>
        <button className="btn btn-fecondation-calculator">Calculer les fécondations</button>
      </div>
    )
  }

}
"use strict";

import React from 'react';
import Informations from './../Informations/informations';
import $ from "jquery";
import axios from 'axios';
import PropTypes from 'prop-types';
// import dofusInfos from "./../dofus-infos";
import './ToolsChoices.css';


export default class ToolsChoices extends React.Component {

  constructor() {
    super()
    this.state = {
      rendering: false,
      lastDD: false
    }
    this.handleSetRendering = this.handleSetRendering.bind(this)
    //console.log(dofusInfos['dragodindes'])
  }

  componentDidMount() {
    if (this.props.userCookie.id) {
      axios.post(global.api + `/users/${this.props.userCookie.id}`)
        .then(respond => {
          //console.log('res : ', respond)
          if (respond.data) {
            console.log('Respond ok : ', respond)
          }
        })
        .catch((e) => {
          console.log('Erreur : ', e)
        })
    }
    $('.top-infos')[0].innerHTML = '';
    $('.top-infos').hide();
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
        <div className="home-menu">
          <h1> Les outils</h1>
          <button className="btn btn-infos"
            onClick={() => this.handleSetRendering(
              <Informations showOrRemove="show" hstr={this.handleSetRendering} />
            )}>
            Mes notes (développement en cours)
          </button>
          <button className="btn btn-craft">Crafts --- (à venir)</button>
          <button className="btn btn-parchemin">Parchemins --- (à venir)</button>
          <button className="btn btn-gestation">Gestation des dragodindes --- (à venir)</button>
          <button className="btn btn-mydd">Mes dragodindes --- (à venir)</button>
          <button className="btn btn-lastdd">Modifier la dernière dragodinde fécondée --- (à venir)</button>
          <button className="btn btn-fecondation-calculator">Calculer les fécondations --- (à venir)</button>
        </div>
      </React.Fragment>
    )
  }

}

ToolsChoices.propTypes = {
  userCookie: PropTypes.object
};
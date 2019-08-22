/* eslint max-len: 'off'*/

"use strict";

import React from 'react';
import RearingChoice from './../RearingChoice/RearingChoice';

export default class Informations extends React.Component {

  constructor(prevProps) {
    super()
    this.state = {
      input: '',
      last_infos_value: '',
      showOrRemove: prevProps.showOrRemove,
      handleSetRendering: prevProps.hstr
    }
  }

  // show_informations(showOrRemove = 'show') {
  //   $('.principal-container')[0].innerHTML = '';
  //   $('.principal-container')[0].className = 'principal-container';
  //   const infos_title = create_h('h2', 'infos-title text-center', 'Informations');
  //   $('.principal-container')[0].appendChild(infos_title);
  //   const keys = Object.keys(json.infos).sort();
  //   keys.forEach((key) => {
  //     let div = '';
  //     const value = json.infos[key];
  //     const title = create_h('h4', false, key);
  //     const p = create_p(false, value);
  //     if (showOrRemove == 'show') {
  //       div = create_div('one_infos text-center', modify_infos);
  //     } else {
  //       div = create_div('one_infos text-center', remove_infos);
  //     }
  //     div.appendChild(title);
  //     div.appendChild(p);
  //     $('.principal-container')[0].appendChild(div);
  //   });
  //   const bottomChoice = create_div('bottom-choice');
  //   if (showOrRemove === 'show') {
  //     const addInfosBtn = create_button('btn btn-add-infos btn-add', 'Ajouter une information', add_infos);
  //     const removeInfosBtn = create_button('btn btn-remove', 'Supprimer une information', () => { show_informations('remove'); });
  //     bottomChoice.appendChild(addInfosBtn);
  //     bottomChoice.appendChild(removeInfosBtn);
  //   } else {
  //     const show_infos_btn = create_button('btn btn-add-infos', 'Annuler la suppression', () => { show_informations('show'); });
  //     bottomChoice.appendChild(show_infos_btn);
  //   }

  //   render_home_button(bottomChoice);
  //   $('.principal-container')[0].style.maxHeight = `${$(window).height() - $('.bottom-choice').height()}px`;
  // }

  render() {
    return (
      <h1 onClick={() => this.state.handleSetRendering(<RearingChoice />)}> TEST TEST TEST TOM TOM TOM </h1>
    )
  }

  // remove_infos() {
  //   delete json.infos[this.children[0].innerHTML];
  //   fs.writeFileSync(`${__dirname}/assets/dofus-electron.json`, JSON.stringify(json));
  //   this.show_informations('show');
  // }

  // modify_infos() {
  //   if (this.children[1].type === undefined) {
  //     let last_infos_value = this.children[1].innerHTML
  //     let input = create_input('infos-input', this.children[1].innerHTML);
  //     input.style.borderRadius = '10px';
  //     input.onkeypress = handle_keypress;
  //     this.setState({
  //       last_infos_value,
  //       input
  //     })
  //     this.removeChild(this.children[1]);
  //     this.appendChild(this.state.input);
  //     $('.infos-input').focus();
  //   } else {
  //     const p = create_p(false, this.state.input.value);
  //     this.removeChild(this.children[1]);
  //     this.appendChild(p);
  //     json.infos[this.children[0].innerHTML] = this.state.input.value;
  //     if (last_infos_value != this.state.input.value) {
  //       fs.writeFileSync(`${__dirname}/assets/dofus-electron.json`, JSON.stringify(json));
  //     }
  //   }
  // }

  // handle_keypress(e) {
  //   if (e.key == 'Enter') {
  //     const p = create_p(false, e.target.value);
  //     const parentDiv = $(`.${this.className}`).parent()[0];
  //     parentDiv.removeChild(this);
  //     parentDiv.appendChild(p);
  //     const infos_to_modify = parentDiv.firstChild.innerHTML;
  //     json.infos[infos_to_modify] = e.target.value;
  //     fs.writeFileSync(`${__dirname}/assets/dofus-electron.json`, JSON.stringify(json));
  //   }
  // }

  // add_infos() {
  //   $('.principal-container')[0].innerHTML = '';
  //   const div = create_div('add-infos-div');
  //   const divName = create_div('col-10 row center-div');
  //   const divValue = create_div('col-10 row center-div');
  //   const title = create_h('h4', 'text-center', 'Rajouter une information');
  //   const confirmBtn = create_button('btn btn-add', "Ajouter l'information", confirm_add_infos);
  //   const inputName = create_input('col-8', false);
  //   const inputValue = create_input('col-8', false);
  //   const infosDiv = create_div('add-infos-form col-12');
  //   const labelName = create_p('col-3 label-add-infos', 'Nom');
  //   const labelValue = create_p('col-3 label-add-infos', 'Valeur');
  //   const returnInfos = create_button('btn', 'Retourner aux informations', () => { show_informations('show'); });
  //   divName.appendChild(labelName);
  //   divName.appendChild(inputName);
  //   divValue.appendChild(labelValue);
  //   divValue.appendChild(inputValue);
  //   infosDiv.appendChild(divName);
  //   infosDiv.appendChild(divValue);
  //   div.appendChild(title);
  //   div.appendChild(infosDiv);
  //   const bottomChoice = create_div('bottom-choice');
  //   $('.principal-container')[0].appendChild(div);
  //   bottomChoice.appendChild(confirmBtn);
  //   bottomChoice.appendChild(returnInfos);
  //   render_home_button(bottomChoice);
  // }

  // confirm_add_infos() {
  //   if ($('input')[0].value != '' && $('input')[1].value != '') {
  //     json.infos[$('input')[0].value] = $('input')[1].value;
  //     fs.writeFileSync(`${__dirname}/assets/dofus-electron.json`, JSON.stringify(json));
  //   }
  //   this.show_informations('show');
  // }
}

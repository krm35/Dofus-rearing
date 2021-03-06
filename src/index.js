"use strict";

import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import RearingChoice from './components/RearingChoice/RearingChoice';
import * as serviceWorker from './serviceWorker';


ReactDOM.render(<RearingChoice />, document.getElementById('rearing-container'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

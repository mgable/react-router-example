import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App as App} from './App';
import {BasicDisplay as BasicExample, BasicLinks} from './App';
import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<BasicExample />, document.getElementById('root'));
ReactDOM.render(<App />, document.getElementById('root'));
// ReactDOM.render(<BasicLinks />, document.getElementById('navbarResponsive'));
registerServiceWorker();

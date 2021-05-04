import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Page} from './pages/index';

ReactDOM.render(
  <React.StrictMode>
    <Page.Home />
  </React.StrictMode>,
  document.getElementById('root')
);
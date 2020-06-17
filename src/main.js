/*
 * @Author: YX
 * @Date: 2020-06-17 14:47:37
 * @LastEditors: Song
 * @LastEditTime: 2020-06-17 14:55:39
 * @Description: 
 */ 
import React from 'react';
import ReactDOM from 'react-dom';
import "./App.css";
import './index.css';
import './font.css';
import App from './boot/setup';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
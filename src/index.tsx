import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
// import { HookApp } from './HookApp';
// import { CounterApp } from './components/useState/CounterApp';
import { CounterWIthCustomHook } from './components/useState/CounterWIthCustomHook';

ReactDOM.render(
  <React.StrictMode>
    <CounterWIthCustomHook />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
// import { HookApp } from './HookApp';
// import { CounterApp } from './components/useState/CounterApp';
// import { CounterWIthCustomHook } from './components/useState/CounterWIthCustomHook';
// import { SimpleForm } from './components/useEffect/SimpleForm';
// import { FormWithCursomHook } from './components/useEffect/FormWithCursomHook';
// import { MultipleCustomHook } from './components/examples/MultipleCustomHook';
// import { FocusScreen } from './components/useRef/FocusScreen';
// import { ExampleRealRef } from './components/useRef/ExampleRealRef';
// import { LayoutEffect } from './components/useLayoutEffect/LayoutEffect';
// import { Memorize } from './components/memos/Memorize';
// import { MemoHook } from './components/memos/MemoHook';
// import { CallbackHook } from './components/memos/CallbackHook';
// import { Padre } from './components/tareaMemo/Padre';
import { TodoAPP } from './components/useReducer/TodoAPP';

ReactDOM.render(
  <React.StrictMode>
    <TodoAPP />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

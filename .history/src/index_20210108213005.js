import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css'
import  reducer,{initialState } from './Components/Reducer';
import { StateProvider } from './Components/StateProvider';

ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
);

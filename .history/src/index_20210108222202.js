import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css'
import  reducer,{initialState } from './Components/Reducer';
import { StateProvider } from './Components/StateProvider';

ReactDOM.render(
    <StateProvider initialState={initialState} reducer={reducer}>
      <React.StrictMode>
      <App/>
  </React.StrictMode>
  </StateProvider>,
  document.getElementById('root')
);

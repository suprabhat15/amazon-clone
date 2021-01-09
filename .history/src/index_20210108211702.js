import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css'
import  reducer,{initialState } from './Components/Reducer';
import { StateProvider } from './Components/StateProvider';

ReactDOM.render(){
  return(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <App/>
    </StateProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
  }

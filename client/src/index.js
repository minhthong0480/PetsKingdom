import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

//import redux
import {createStore, combineReducers} from 'redux'
import {Provider} from 'react-redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import rootReducer from './reducer'



//create redux store
const store = createStore(rootReducer, composeWithDevTools());

//provice redux store

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
     <App />
    </Provider>
    
  </React.StrictMode>
);


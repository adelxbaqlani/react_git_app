import React from "react";
import ReactDOM from "react-dom/client";
import App from './App';
import { Provider } from "react-redux";
import { legacy_createStore as createStore, store, compose, applyMiddleware } from "redux";
import reduxThunk from 'redux-thunk';
import reducers from "./reducers";

const root = ReactDOM.createRoot(document.querySelector('#root'));
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
root.render(
  <Provider

    store={createStore(reducers, composeEnhancers(applyMiddleware(reduxThunk)))}>

    <App />
    
  </Provider>

);
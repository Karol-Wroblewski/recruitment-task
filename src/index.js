import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
import App from './containers/App.js';
import 'bootstrap/dist/css/bootstrap.css';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import MapWrapperReducer from './store/reducers/MapWrapper';
import AppReducer from './store/reducers/App';

const rootReducer = combineReducers({
  MapWrapper: MapWrapperReducer,
  App: AppReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

const app = (
  <Provider store={store}>
      <App />
  </Provider>
);

ReactDOM.render(app, document.getElementById('root'));
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';

import App from './containers/App';
import * as serviceWorker from './serviceWorker';
import { searchRobots, requestRobots, setRoute, setName } from './reducers';

import 'tachyons';
import './index.css';

const logger = createLogger();

const middlewares = [ thunkMiddleware ];

if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger)
}

const rootReducer = combineReducers({searchRobots, requestRobots, setRoute, setName})
const store = createStore( rootReducer, composeWithDevTools(applyMiddleware(...middlewares)));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();

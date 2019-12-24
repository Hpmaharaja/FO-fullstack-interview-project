import React from "react";
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, browserHistory, Route, Link, Switch, Redirect } from "react-router-dom";

import './public/styles/css/main.css';

// Redux Imports
import { combineReducers, createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory';
import { ConnectedRouter, routerMiddleware } from 'react-router-redux';
import reduxThunk from 'redux-thunk';

import logger from 'redux-logger';

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { PersistGate } from 'redux-persist/integration/react';

// reducers
import rootReducer from './reducers/index';

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

const history = createHistory();
// const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStore(persistedReducer,
                          applyMiddleware(logger),
                          compose(applyMiddleware(reduxThunk, routerMiddleware(history)),
                          window.devToolsExtension ? window.devToolsExtension() : f => f
                        ));

let persistor = persistStore(store);

window.store = store;

// Overview Holding App Module
import App from './components/app';
  // Landing
  import Landing from './components/Landing';


const BasicExample = () => (
    <Provider store={store} >
      <PersistGate loading={null} persistor={persistor}>
        <ConnectedRouter history={history}>
          <App>
            <Route exact path="/" component={Landing} />
          </App>
        </ConnectedRouter>
      </PersistGate>
    </Provider>
);

ReactDOM.render(
    <BasicExample />,
  document.querySelector('.app')
);

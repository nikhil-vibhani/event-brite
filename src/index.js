import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from './reducers';
import indexRoutes from "routes/index.jsx";
import { connectRouter, routerMiddleware } from 'connected-react-router';
import createHistory from 'history/createBrowserHistory'
import * as serviceWorker from './serviceWorker';
import "assets/scss/material-kit-react.css?v=1.3.0";

export const history = createHistory()

const initialState = {}
const enhancers = []
const middleware = [
  thunk,
  logger,
  routerMiddleware(history)
]

if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__
  
  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension())
  }
}

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers
)

const store = createStore(
  connectRouter(history)(rootReducer),
  initialState,
  composedEnhancers
)

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        {indexRoutes.map((prop, key) => {
          return <Route path={prop.path} key={key} component={prop.component} />;
        })}
      </Switch>
    </Router>
  </Provider>,
  document.getElementById("root")
);


serviceWorker.unregister();
import { createStore, applyMiddleware, compose } from 'redux'
import { apiMiddleware } from 'redux-api-middleware';
import { routerMiddleware } from 'react-router-redux';
import { browserHistory } from 'react-router';
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'

import rootReducer from './reducers/index'

const isDev = () => process.env.NODE_ENV === 'development';
const showDevTools = isDev() && !!window.devToolsExtension;
const logger = createLogger()

export default function configureStore(initialState = {}) {
  return createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(
        apiMiddleware,
        routerMiddleware(browserHistory),
        thunk,
        logger
      ),
      showDevTools ? window.devToolsExtension() : arg => arg,
    ),
  )
}

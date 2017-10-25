import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import { Provider } from 'react-redux'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import injectTapEventPlugin from 'react-tap-event-plugin'

import configureStore from './redux/configureStore'

import './styles/index.css';
import 'typeface-roboto'

import App from './ui/App'

import LandingPage from './ui/pages/Landing/index'
import LoginPage from './ui/pages/Login/index'

injectTapEventPlugin();
const store = configureStore()

export default () => (
  <MuiThemeProvider>
    <Provider store={store}>
      <Router>
        <App>
          <AppBar title="My AppBar" />
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/login" component={LoginPage} />
        </App>
      </Router>
    </Provider>
  </MuiThemeProvider>
)

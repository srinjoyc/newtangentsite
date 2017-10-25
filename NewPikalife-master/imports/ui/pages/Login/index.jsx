import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'

import { Checkbox, RaisedButton, TextField } from 'material-ui'
import Ionicon from 'react-ionicons'

import './index.scss'

const styles = {
  checkbox: {
    flex: 1,
    textAlign: 'left'
  },
  primaryButton: {
    backgroundColor: '#00b2e9'
  },
  textArea: {
    width: '400px'
  }
}

class Login extends Component {
  handleLogin = () => {
    location.href = '/login'
  }

  render () {
    return (
      <div className='container'>
        <div className='form'>
          <div className='title'>Log in</div>
          <div className='input-div'>
            <Ionicon icon='ion-ios-email-outline' fontSize='24px' color='gray' />
            <TextField className='text-field' style={styles.textArea} hintText='Exercise Name or Email' />
          </div>
          <div className='input-div'>
            <Ionicon icon='ion-android-lock' fontSize='24px' color='gray' />
            <TextField className='text-field' style={styles.textArea} hintText='Password' />
          </div>
          <div className='extra-div'>
            <Checkbox
              label='Remember me'
              style={styles.checkbox}
            />
            <Link style={{flex: 1}} to={'/'}>Forgot Password?</Link>
          </div>
          <RaisedButton className='login-btn' buttonStyle={styles.primaryButton} label='Log In' primary={true} />
          <div className='signup-div'>
            <div className='text'>Don't have an account?</div>
            <RaisedButton labelColor='#00b2e9' className='signup-btn' label='Sign Up' />
          </div>
        </div>
      </div>
    )
  }
}

export default Login

import React from 'react'
import { render } from 'react-dom'
import GoogleLogin from './GoogleLogin'

const renderApp = Component => {
  const app = document.getElementById('app')

  render(<Component />, app)
}

renderApp(GoogleLogin)

if (module.hot) {
  module.hot.accept('./GoogleLogin.js', () => {
    /* eslint-disable global-require */
    const app = require('./GoogleLogin.js').default
    renderApp(app)
  })
}
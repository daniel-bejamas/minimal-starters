import React from 'react'
import ReactDOM from 'react-dom'

import { Component } from './Component'

const App = () => (
  <React.StrictMode>
    <Component />
  </React.StrictMode>
)

ReactDOM.render(<App />, document.getElementById('root'))

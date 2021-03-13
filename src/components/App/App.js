import React, { Component } from 'react'
import './App.css'
import Header from '../Header/Header'

class App extends Component {
  constructor() {
    super()
    this.state = {
      user: { id: 1, name: 'Ham Leadbeater', travelerType: 'relaxer' }
    }
  }

  componentDidMount() {

  }

  render() {
    return (
      <>
        <Header name={this.state.user.name} />
      </>
    )
  }
}

export default App

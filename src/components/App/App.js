import React, { Component } from 'react'
import './App.css'
import Header from '../Header/Header'
import Form from '../Form/Form'
import Stats from '../Stats/Stats'
import Trips from '../Trips/Trips'

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
        <main>
          <aside className="sidebar">
            <img className="icon" src="../../images/undraw_travel_mode_7sf4.svg" alt="woman traveling with a suitcase" />
            <Form />
            <Stats />
          </aside>
          <Trips />
        </main>
      </>
    )
  }
}

export default App

import React, { Component } from 'react'
import './App.css'
import icon from '../../images/undraw_travel_mode_7sf4.svg'
import Header from '../Header/Header'
import Form from '../Form/Form'
import Stats from '../Stats/Stats'
import Trips from '../Trips/Trips'
import { getTripData, getDestinationData } from '../../apiCalls'

class App extends Component {
  constructor() {
    super()
    this.state = {
      currentTraveler: { id: 7, name: 'Emmet Sandham', travelerType: 'relaxer' },
      allTrips: [],
      allDestinations: [],
      travelerTrips: []
    }
  }

  componentDidMount() {
    Promise.all([ getTripData(), getDestinationData() ])
    .then(values => {
      this.setState({ allTrips: values[0].trips })
      this.setState({ allDestinations: values[1].destinations })
    })
    .then(() => this.getTravelerTrips())
    .catch(error => console.log(error))
  }

  getTravelerTrips = () => {
    const filteredTrips = this.state.allTrips.filter(trip => {
      return trip.userID === this.state.currentTraveler.id
    })

    this.matchDestinations(filteredTrips)
  }

  matchDestinations = (filteredTrips) => {
    const matchedDestinations = filteredTrips.map(trip => {
      const matchedDestination = this.state.allDestinations.find(dest => {
        return dest.id === trip.destinationID
      })

      trip.destination = matchedDestination

      return trip
    })

    this.setState({ travelerTrips: matchedDestinations })
  }

  render() {
    return (
      <>
        <Header name={this.state.currentTraveler.name} />
        <main>
          <aside className="sidebar">
            <img className="icon" src={icon} alt="woman traveling with a suitcase" />
            <Form />
            <Stats />
          </aside>
          <Trips travelerTrips={this.state.travelerTrips} />
        </main>
      </>
    )
  }
}

export default App

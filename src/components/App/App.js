import React, { Component } from 'react'
import './App.css'
import icon from '../../images/undraw_travel_mode_7sf4.svg'
import Header from '../Header/Header'
import Form from '../Form/Form'
import Trips from '../Trips/Trips'
import { getSingleTraveler, fetchTripData, fetchDestinationData, postTrip } from '../../apiCalls'

class App extends Component {
  constructor() {
    super()
    this.state = {
      // TO DO: with more time, I'd create a login form to bring in different users from the travelers endpoint
      currentTraveler: {},
      allTrips: [],
      allDestinations: [],
      travelerTrips: []
    }
  }

  componentDidMount() {
    const rand = Math.floor(Math.random() * 50) + 1

    Promise.all([ getSingleTraveler(rand), fetchTripData(), fetchDestinationData() ])
    .then(values => {
      this.setState({ currentTraveler: values[0] })
      this.setState({ allTrips: values[1].trips })
      this.setState({ allDestinations: values[2].destinations })
    })
    .then(() => this.matchDestinations())
    .then(() => this.getTravelerTrips())
    .catch(error => console.log(error))
  }

  matchDestinations = () => {
    const matchedDestinations = this.state.allTrips.map(trip => {
      const matchedDestination = this.state.allDestinations.find(dest => {
        return dest.id === trip.destinationID
      })

      trip.destination = matchedDestination

      return trip
    })

    this.setState({ allTrips: matchedDestinations })
  }

  getTravelerTrips = () => {
    const filteredTrips = this.state.allTrips.filter(trip => {
      return trip.userID === this.state.currentTraveler.id
    })

    this.setState({ travelerTrips: filteredTrips })
  }

  addTrip = (trip) => {
    postTrip(trip)
    .then(data => this.setState({ allTrips: [data.newResource, ...this.state.allTrips] }))
    .then(() => this.matchDestinations())
    .then(() => this.getTravelerTrips())
    .catch(error => console.log(error))
  }

  render() {
    return (
      <>
        {this.state.currentTraveler?.name && <Header name={this.state.currentTraveler.name} />}
        <main>
          <aside className="sidebar">
            <img className="icon" src={icon} alt="woman traveling with a suitcase" />
            <Form
              currentTraveler={this.state.currentTraveler}
              allTrips={this.state.allTrips}
              allDestinations={this.state.allDestinations}
              addTrip={this.addTrip}
            />
          </aside>
          <Trips travelerTrips={this.state.travelerTrips} />
        </main>
      </>
    )
  }
}

export default App

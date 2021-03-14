import React, { Component } from 'react'
import './Form.css'

class Form extends Component {
  constructor() {
    super()
    this.state = {
      date: '',
      travelers: '',
      duration: '',
      destination: '',
      quote: '',
      added: false
    }
  }

  populateDestinations = () => {
    const alphebetized = this.props.allDestinations.sort((a, b) => {
      return a.destination.localeCompare(b.destination)
    })

    return alphebetized.map(dest => {
      return <option key={dest.id}>{dest.destination}</option>
    })
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  checkDateInput = () => {
    const currentDate = new Date()
    const inputDate = new Date(this.state.date.trim())

    return (this.state.date === '') || (inputDate < currentDate) ? false : true
  }

  formatCost = (number) => {
    const formatted = number.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    return formatted
  }

  getQuote = () => {
    const matchingDest = this.findDestination()
    const lodgingTotal = matchingDest.estimatedLodgingCostPerDay * this.state.duration
    const flightsTotal = matchingDest.estimatedFlightCostPerPerson * this.state.travelers
    const total = lodgingTotal + flightsTotal
    const formatted = this.formatCost(total)

    this.setState({ quote: formatted })
  }

  findDestination = () => {
    return this.props.allDestinations.find(location => {
      return location.destination === this.state.destination
    })
  }

  formatDate = (dateValue) => {
    return dateValue.replace(/-/g, '/')
  }

  createTrip = () => {
    const matchingDest = this.findDestination()

    const formattedTrip = {
      id: Date.now(),
      userID: this.props.currentTraveler.id,
      destinationID: matchingDest.id,
      travelers: parseInt(this.state.travelers),
      date: this.formatDate(this.state.date),
      duration: parseInt(this.state.duration),
      status: 'approved',
      suggestedActivities: []
    }

    this.setState({ added: true })
    this.props.addTrip(formattedTrip)
    this.clearInputs()
  }

  clearInputs = () => {
    this.setState({ date: '', travelers: '', duration: '', destination: '', quote: '' })
    setTimeout(() => this.setState({ added: false }), 3000)
  }

  render() {
    return(
      <>
        <h2>Plan A New Trip</h2>
        <form className="trip-form">
          <label htmlFor="date">Start Date:</label>
          <input
            type="date"
            name="date"
            value={this.state.date}
            onChange={this.handleChange}
            required
          />

          <label htmlFor="duration">Number of Days:</label>
          <input
            type="number"
            name="duration"
            value={this.state.duration}
            onChange={this.handleChange}
            minLength="1"
            min="1"
            required
          />

          <label htmlFor="travelers">Number of Travelers:</label>
          <input
            type="number"
            name="travelers"
            value={this.state.travelers}
            onChange={this.handleChange}
            minLength="1"
            min="1"
            required
          />

          <label htmlFor="destination">Destination:</label>
          <select
            className="trip-destination"
            name="destination"
            value={this.state.destination}
            onChange={this.handleChange}
            required
          >
            <option value="" disabled>Select a destination</option>
            {this.populateDestinations()}
          </select>

          {!this.checkDateInput() || !this.state.travelers || !this.state.duration || !this.state.destination ?
            <button type="button" name="button" className="button button-form button-quote disabled" disabled>Get a Quote</button>
            :
            <button type="button" name="button" className="button button-form button-quote" onClick={this.getQuote}>Get a Quote</button>
          }
          {this.state.quote && <p><strong>Estimated trip cost:</strong> ${this.state.quote}</p>}
          {this.state.quote &&
            <button type="button" className="button button-form button-submit" onClick={this.createTrip}>Add Trip</button>
          }
          {this.state.added && <p className="trip-request-message"><em>Trip added. Bon voyage!</em></p>}
        </form>
      </>
    )
  }
}

export default Form

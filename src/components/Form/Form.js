import React, { Component } from 'react'
import './Form.css'

class Form extends Component {
  constructor() {
    super()
    this.state = {

    }
  }


  render() {
    return(
      <>
        <h2>Plan A New Trip</h2>
        <form className="trip-form">
          <label htmlFor="trip-start">Start Date:</label>
          <input type="date" name="trip-start" id="trip-start" required />
          <label htmlFor="trip-duration">Number of Days:</label>
          <input type="number" name="trip-duration" id="trip-duration" minLength="1" min="1" required />
          <label htmlFor="trip-travelers">Number of Travelers:</label>
          <input type="number" name="trip-travelers" id="trip-travelers" minLength="1" min="1" required />
          <label htmlFor="trip-destination">Destination:</label>
          <select name="trip-destination" id="trip-destination" required>
            <option value="" disabled selected></option>
          </select>
          <button type="button" name="button" className="button button-quote" id="button-quote">Get a Quote</button>
          <p className="hidden" id="trip-cost"></p>
          <button type="button" name="button" className="button button-submit hidden" id="button-submit">Request Trip</button>
          <p className="error-message" id="trip-error-message"></p>
          <p className="hidden" id="trip-request-message"><em>Your trip request has been sent. You'll hear back from your agent on whether it's been approved soon!</em></p>
        </form>
      </>
    )
  }
}

export default Form

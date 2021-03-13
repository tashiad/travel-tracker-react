import React from 'react'
import './Trip.css'

const Trip = ({ id, date, duration, travelers, destination, flights, lodging }) => {
  return (
    <article className="card">
      <h3 className="card-destination">{destination}</h3>
      <p className="card-travelers">{travelers}</p>
      <p className="card-date">{date}</p>
      <p className="card-duration">{duration}</p>
      <p className="card-lodging">{lodging}</p>
      <p className="card-flights">{flights}</p>
    </article>
  )
}

export default Trip

import React from 'react'
import './Trip.css'

const Trip = () => {
  return (
    <article className="card">
      <h3 className="card-destination">Sample Card</h3>
      <img className="card-image" src="source" alt="alt-text" />
      <p className="card-travelers"></p>
      <p className="card-date"></p>
      <p className="card-duration"></p>
      <p className="card-lodging"></p>
      <p className="card-flights"></p>
      <p className="card-status"></p>
    </article>
  )
}

export default Trip

import React from 'react'
import './Trip.css'

const Trip = ({ id, date, duration, travelers, destination, alt, image, flights, lodging }) => {
  const formatCost = (number) => {
    const formatted = number.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    return formatted
  }

  return (
    <article className="card">
      <h3 className="card-destination">{destination}</h3>
      <img className="card-image" src={image} alt={alt} />
      <p className="card-travelers">{travelers}</p>
      <p className="card-date">{date}</p>
      <p className="card-duration">{duration}</p>
      <p className="card-lodging">${formatCost(lodging)}</p>
      <p className="card-flights">${formatCost(flights)}</p>
    </article>
  )
}

export default Trip

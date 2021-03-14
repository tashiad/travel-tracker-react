import React from 'react'
import './Trip.css'

const Trip = ({ id, date, duration, travelers, destination, alt, image, flights, lodging, removeTrip }) => {
  const formatDate = () => {
    const nums = date.split('/')
    const formatted = `${nums[1]}/${nums[2]}/${nums[0]}`
    return formatted
  }

  const formatCost = (number) => {
    const formatted = number.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    return formatted
  }

  const calculateCost = () => {
    const lodgingTotal = lodging * duration
    const flightsTotal = flights * travelers
    const total = lodgingTotal + flightsTotal
    return formatCost(total)
  }

  return (
    <article className="card">
      <button onClick={() => removeTrip(id)}>X</button>
      <h3 className="card-destination">{destination}</h3>
      <img className="card-image" src={image} alt={alt} />
      <p className="card-travelers"><strong>Travelers:</strong> {travelers}</p>
      <p className="card-date"><strong>Start Date:</strong> {formatDate()}</p>
      <p className="card-duration"><strong>Duration:</strong> {duration} days</p>
      <p className="card-lodging"><strong>Lodging:</strong> ${formatCost(lodging)} per night</p>
      <p className="card-flights"><strong>Flights:</strong> ${formatCost(flights)} per person</p>
      <p><strong>Total Trip Cost:</strong> ${calculateCost()}</p>
    </article>
  )
}

export default Trip

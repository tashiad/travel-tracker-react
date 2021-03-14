import React from 'react'
import './Trip.css'

const Trip = ({id, date, duration, travelers, destination, alt, image, flights, lodging, removeTrip }) => {
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
      <button className="button-remove" onClick={() => removeTrip(id)}>X</button>
      <h3>{destination}</h3>
      <img src={image} alt={alt} />
      <p><strong>Travelers:</strong> {travelers}</p>
      <p><strong>Start Date:</strong> {formatDate()}</p>
      <p><strong>Duration:</strong> {duration} days</p>
      <p><strong>Lodging:</strong> ${formatCost(lodging)} per night</p>
      <p><strong>Flights:</strong> ${formatCost(flights)} per person</p>
      <p><strong>Total Trip Cost:</strong> ${calculateCost()}</p>
    </article>
  )
}

export default Trip

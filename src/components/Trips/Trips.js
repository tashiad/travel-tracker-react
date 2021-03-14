import React from 'react'
import PropTypes from 'prop-types'
import './Trips.css'
import Trip from '../Trip/Trip'

const Trips = ({ travelerTrips, removeTrip, error, isLoading }) => {
  const sortedTrips = travelerTrips.sort((a, b) => {
    return new Date(b.date) - new Date(a.date)
  })

  const tripCards = sortedTrips.map(trip => {
    return (
      <Trip
        id={trip.id}
        key={trip.id}
        date={trip.date}
        duration={trip.duration}
        travelers={trip.travelers}
        destination={trip.destination.destination}
        alt={trip.destination.alt}
        image={trip.destination.image}
        flights={trip.destination.estimatedFlightCostPerPerson}
        lodging={trip.destination.estimatedLodgingCostPerDay}
        removeTrip={removeTrip}
      />
    )
  })

  return (
    <section className="all-trips">
      <h2>Your Trips</h2>
      {error && <p>{error}</p>}
      <section className="card-grid">
        {isLoading ? <h3>Loading...</h3> : tripCards}
      </section>
    </section>
  )
}

Trips.propTypes = {
  travelerTrips: PropTypes.array,
  removeTrip: PropTypes.func,
  error: PropTypes.string,
  isLoading: PropTypes.bool
}

export default Trips

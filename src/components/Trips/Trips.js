import React from 'react'
import './Trips.css'
import Trip from '../Trip/Trip'

const Trips = ({ travelerTrips }) => {
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
      />
    )
  })

  return (
    <section className="all-trips">
      <h2>Your Trips</h2>
      <button type="button" name="button" className="button button-filter" id="no-trip-filters">All Trips</button>
      <button type="button" name="button" className="button button-filter" id="approved-trips">Upcoming Trips</button>
      <button type="button" name="button" className="button button-filter" id="pending-trips">Past Trips</button>
      <section className="card-grid">
        { tripCards }
      </section>
    </section>
  )
}

export default Trips

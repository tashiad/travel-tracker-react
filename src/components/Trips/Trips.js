import React from 'react'
import './Trips.css'
import Trip from '../Trip/Trip'

const Trips = ({ travelerTrips }) => {
  const tripCards = travelerTrips.map(trip => {
    return (
      <Trip
        id={trip.id}
        key={trip.id}
        date={trip.date}
        duration={trip.duration}
        travelers={trip.travelers}
        destination={trip.destination.destination}
        // alt={trip.destination.alt}
        // image={this.destination.image}
        flights={trip.destination.estimatedFlightCostPerPerson}
        lodging={trip.destination.estimatedLodgingCostPerDay}
      />
    )
  })

  return (
    <section className="all-trips">
      <h2>Your Trips</h2>
      <button type="button" name="button" className="button button-filter" id="no-trip-filters">All Trips</button>
      <button type="button" name="button" className="button button-filter" id="approved-trips">Approved Trips</button>
      <button type="button" name="button" className="button button-filter" id="pending-trips">Pending Trips</button>
      <section className="card-grid">
        { tripCards }
      </section>
    </section>
  )
}

export default Trips

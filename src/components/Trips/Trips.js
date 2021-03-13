import React from 'react'
import './Trips.css'
import Trip from '../Trip/Trip'

const Trips = () => {
  return (
    <section className="all-trips">
      <h2>Your Trips</h2>
      <button type="button" name="button" className="button button-filter" id="no-trip-filters">All Trips</button>
      <button type="button" name="button" className="button button-filter" id="approved-trips">Approved Trips</button>
      <button type="button" name="button" className="button button-filter" id="pending-trips">Pending Trips</button>
      <section className="card-grid">
        <Trip />
        <Trip />
        <Trip />
        <Trip />
      </section>
    </section>
  )
}

export default Trips

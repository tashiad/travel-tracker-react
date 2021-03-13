import React from 'react'
import './Stats.css'

const Stats = () => {
  return (
    <aside className="trip-stats">
      <h3>Your Stats</h3>
      <p className="stat" id="total-spent"></p>
      <p id="total-spent-message"></p>
      <p className="stat" id="trips-taken"></p>
      <p>All time total trips taken</p>
      <p className="stat" id="days-traveled"></p>
      <p>All time total days traveled</p>
    </aside>
  )
}

export default Stats

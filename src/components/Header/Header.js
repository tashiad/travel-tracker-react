import React from 'react'
import PropTypes from 'prop-types'
import './Header.css'

const Header = ({ name }) => {
  const getFirstName = () => {
    const firstName = name.split(' ')[0]
    return firstName
  }

  return (
    <header>
      <h1><i className="fas fa-plane"></i> COVID's Over Travel Tracker</h1>
      {!name ? <h2>Welcome!</h2> : <h2>Welcome, {getFirstName()}</h2>}
    </header>
  )
}

Header.propTypes = {
  name: PropTypes.string
}

export default Header

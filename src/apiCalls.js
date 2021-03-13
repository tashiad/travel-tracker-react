// const tripErrorMessage = document.querySelector('#trip-error-message')

// export const getTravelerData = () => {
//   return fetch('https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/travelers/travelers')
//     .then(response => response.json())
// }
//
// export const getSingleTraveler = (travelerId) => {
//   return fetch(`http://localhost:3001/api/v1/travelers/${travelerId}`)
//     .then(response => response.json())
// }
//
export const fetchTripData = () => {
  return fetch('https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/trips/trips')
    .then(response => response.json())
}

export const fetchDestinationData = () => {
  return fetch('https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/destinations/destinations')
    .then(response => response.json())
}

export const postTrip = (trip) => {
  return fetch('https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/trips/trips', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(trip)
  })
  .then(response => response.json())
}

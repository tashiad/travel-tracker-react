// const tripErrorMessage = document.querySelector('#trip-error-message')

export const getTravelerData = () => {
  return fetch('https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/travelers/travelers')
    .then(response => response.json())
}

export const getSingleTraveler = (travelerId) => {
  return fetch(`http://localhost:3001/api/v1/travelers/${travelerId}`)
    .then(response => response.json())
}

export const getTripData = () => {
  return fetch('https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/trips/trips')
    .then(response => response.json())
}

export const getDestinationData = () => {
  return fetch('https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/destinations/destinations')
    .then(response => response.json())
}

// postTripRequest(tripRequest) {
//   const postFormat = {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(tripRequest)
//   }
//
//   return fetch('http://localhost:3001/api/v1/trips', postFormat)
//     .then(response => {
//       if (!response.ok) {
//         tripErrorMessage.innerText = 'Unable to request trip. Please try again later.'
//       }
//       return response.json()
//     })
// }

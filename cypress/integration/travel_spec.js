describe('Travel Tracker Homepage', () => {

  beforeEach(() => {
    // cy // unable to get this to stub correctly (fixture data isn't coming in). may be easier once login form has been created.
    //   .fixture('travelers')
    //   .then(data => {
    //     cy.intercept('GET', `https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/travelers/travelers/${id}`, { body: data })
    //   })

    cy
      .fixture('trips')
      .then(data => {
        cy.intercept('GET', 'https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/trips/trips', { body: data })
      })

    cy
      .fixture('destinations')
      .then(data => {
        cy.intercept('GET', 'https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/destinations/destinations', { body: data })
      })

    cy.visit('http://localhost:3000');
  });

  it('Should display the correct header on load', () => {
    cy
      .get('h1').should('have.text', ' COVID\'s Over Travel Tracker')
      .get('h2').should('contain', 'Welcome, Ham')
  })

  it('Should display existing user trips on load', () => {
    cy
      .get('.card').should('contain', 'San Juan')
      .get('.card').get('img')
      .get('.card').should('contain', 'Travelers')
      .get('.card').should('contain', 'Start Date')
      .get('.card').should('contain', 'Duration')
      .get('.card').should('contain', 'Lodging')
      .get('.card').should('contain', 'Flights')
      .get('.card').should('contain', 'Total Trip Cost')
  })

  it('Should display the form correctly', () => {
    cy
      .get('form input[name=date]')
      .get('form input[name=duration]')
      .get('form input[name=travelers]')
      .get('form select[name=destination]')
      .get('form').contains('button', 'Get a Quote')
  })

  it('Should be able to fill out the form', () => {
    cy
      .get('form input[name=date]').type('2021-05-10').should('have.value', '2021-05-10')
      .get('form input[name=duration]').type('10').should('have.value', '10')
      .get('form input[name=travelers]').type('2').should('have.value', '2')
      .get('form select[name=destination]').select('Amsterdam, Netherlands').should('have.value', 'Amsterdam, Netherlands')
  })

  it('Should be able to quote a trip', () => {
    cy
      .get('form input[name=date]').type('2021-05-10').should('have.value', '2021-05-10')
      .get('form input[name=duration]').type('10').should('have.value', '10')
      .get('form input[name=travelers]').type('2').should('have.value', '2')
      .get('form select[name=destination]').select('Amsterdam, Netherlands').should('have.value', 'Amsterdam, Netherlands')
      .get('form').contains('button', 'Get a Quote').click()
      .get('p').should('contain', 'Estimated trip cost: $2,900.00')
  })

  it('Should be able to add a new trip', () => {

    // TO DO: unable to get this intercept to work
    // cy.intercept('POST', 'https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/trips/trips', {
    //     statusCode: 200,
    //     body: {
    //       "id": Date.now(),
    //       "userID": 1,
    //       "destinationID": 9,
    //       "travelers": 2,
    //       "date": "2021/05/10",
    //       "duration": 10,
    //       "status": "approved",
    //       "suggestedActivities": []
    //     }
    //   })

    cy
      .get('form input[name=date]').type('2021-05-10')
      .get('form input[name=duration]').type('10')
      .get('form input[name=travelers]').type('2')
      .get('form select[name=destination]').select('Amsterdam, Netherlands')
      .get('form').contains('button', 'Get a Quote').click()
      .get('.button-submit').click()
      .get('.card').should('contain', 'Amsterdam, Netherlands')
      .get('.card').should('contain', 'Start Date: 05/10/2021')
  })

  it.skip('Should not be able to submit the form unless all fields have been filled out', () => {
    cy.get('form input[name=title]').type('Test 3').should('have.value', 'Test 3')
    cy.get('form input[name=long_url]')
    cy.get('button[name="submit"]').should('be.disabled')
  })

  it.skip('Should be able to delete a URL', () => {
    cy.intercept('DELETE', 'http://localhost:3001/api/v1/urls/4', {statusCode: 204})
    cy.get('.delete-button').eq(1).click()
    cy.get('.url').eq(1).should('not.exist')
  })

})

describe('Server Sad Paths', () => {

  it.skip('Should display an error message when the server returns a 400 error', () => {
  cy
    .intercept('http://localhost:3001/api/v1/urls', {statusCode: 404})
    .visit('http://localhost:3000')
    .get('section').should('have.text', 'Something went wrong with the server. Please refresh the page or try again later')
})

  it.skip('Should display an error message when the server returns a 500 error', () => {
    cy
      .intercept('http://localhost:3001/api/v1/urls', {statusCode: 500})
      .visit('http://localhost:3000')
      .get('section').should('have.text', 'Something went wrong with the server. Please refresh the page or try again later')
  })

})

import rand from '../../src/random-number'

describe('Travel Tracker Homepage', () => {

  beforeEach(() => {
    cy
      .fixture('travelers')
      .then(data => {
        cy.intercept('GET', `https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/travelers/travelers/${rand}`, { body: data })
      })

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
      .get('h2').should('contain', 'Welcome')
  })

  it.skip('Should display existing shortened urls on load', () => {
    cy.get('.url').eq(0).should('contain', 'Test 1')
    cy.get('.url').eq(1).should('contain', 'Test 2')
  })

  it.skip('Should display the urls form on load', () => {
    cy.get('form input[name=title]')
    cy.get('form input[name=long_url]')
    cy.get('form').contains('button', 'Shorten Please!')
  })

  it.skip('Should be able to fill out the form', () => {
    cy.get('form input[name=title]').type('Test 3').should('have.value', 'Test 3')
    cy.get('form input[name=long_url]').type(longUrl).should('have.value', longUrl)
  })

  it.skip('Should be able to add a new shortened URL', () => {
    cy.intercept('POST', 'http://localhost:3001/api/v1/urls', {
        statusCode: 200,
        body: {
          "id": 3,
          "long_url": longUrl,
          "short_url": "http://localhost:3001/useshorturl/4",
          "title": "Test 3",
        }
      })
    cy.get('form input[name=title]').type('Test 3').should('have.value', 'Test 3')
    cy.get('form input[name=long_url]').type(longUrl).should('have.value', longUrl)
    cy.get('button[name="submit"]').click()
    cy.get('.url').contains('Test 3')
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
